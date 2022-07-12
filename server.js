const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use(express.static("client/build"));

const server = http.createServer(app);

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected");
});

const { Schema } = mongoose;
var Room = require("./models/Room");
var UserData = require("./models/UserData");

const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
});

app.post("/api/checkRoomCode", (req, res) => {
  const { roomCode } = req.body;
  let query = { roomId: roomCode };
  let message = "";
  let flag = true;

  Room.findOne(query)
    .then((currentRoom) => {
      if (currentRoom && currentRoom.roomId) {
        if (currentRoom.roomSize <= currentRoom.users.length) {
          message = "No space in room";
          flag = false;
        }
      } else {
        message = "No such room exists.";
        flag = false;
      }
      res.send({ message: message, flag: flag });
    })
    .catch((err) => console.log(err));
});

app.post("/api/deleteHandle", (req, res) => {
  const { username } = req.body;
  let query = { username: username };

  UserData.updateOne(query, { handle: "" })
    .then((e) => res.send("deleted Handle"))
    .catch((err) => console.log(e));
});

app.post("/api/findHandle", (req, res) => {
  const { username } = req.body;
  let query = { username: username };
  let foundHandle = "";

  UserData.findOne(query)
    .then((e) => {
      if (e) {
        foundHandle = e.handle;
      }
      res.send(foundHandle);
    })
    .catch((err) => console.log(err));
});

app.post("/api/updateUserHandle", (req, res) => {
  const { handle, username } = req.body;

  let query = { username: username };

  UserData.updateOne(query, { handle: handle })
    .then((e) => res.send("updatedHandle"))
    .catch((err) => console.log("err")); //i made a change here
});

app.post("/api/updateUser", (req, res) => {
  const { email } = req.body;

  let newUser = new UserData({
    username: email,
    handle: "",
  });

  newUser
    .save()
    .then((e) => {
      res.send("saved");
    })
    .catch((err) => console.log(err));
});

app.post("/api/checkAndMark", (req, res) => {
  const { currentProblem, handle, roomid } = req.body;
  let query = { roomId: roomid };

  let currentProblemData;

  Room.findOne(query)
    .then((currentRoom) => {
      currentProblemData = currentRoom.problemData;

      currentProblemData.forEach((problem, idx) => {
        if (
          problem.contestId === currentProblem.problem.contestId &&
          problem.name === currentProblem.problem.name &&
          problem.index == currentProblem.problem.index
        ) {
          if (problem.userSolved == "") {
            currentProblemData[idx].userSolved = handle;

            Room.updateOne(query, { problemData: currentProblemData })
              .then((found) => {
                io.to(roomid).emit("userSolved", {
                  problemIndex: idx,
                  user: handle,
                });
              })
              .catch((err) => console.log(err));
          } else {
            res.send("marked");
          }
        }
      });
    })
    .catch((err) => console.log(err));
});

app.post("/api/checkUserSolved", (req, res) => {
  const { roomid, problem } = req.body;
  let query = { roomId: roomid };

  Room.findOne(query)
    .then((currentRoom) => {
      if (currentRoom) {
        currentRoom.problemData.forEach((e) => {
          if (e.contestId == problem.contestId && e.index == problem.index) {
            res.json({ userSolved: e.userSolved });
          }
        });
      }
    })
    .catch((err) => console.log(err));
});

app.post("/api/round/problems", (req, res) => {
  const { roomid, problemsArray, colorMap } = req.body;
  let query = { roomId: roomid };
  let currentUsers;

  Room.findOne(query)
    .then((currentRoom) => {
      currentUsers = currentRoom.users;

      currentUsers.forEach((user, userIdx) => {
        currentUsers[userIdx].color = colorMap[user.userId];
      });

      Room.updateOne(query, {
        $set: { users: currentUsers, problemData: problemsArray },
      })
        .then((dbres) => {
          // console.log(`post/round - ${dbres.nModified}`);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

app.get("/api/round", (req, res) => {
  const { roomid } = req.query;
  let problemsArray = null;
  let colorMap = {};
  let duration;

  let query = { roomId: roomid };

  Room.findOne(query)
    .then((currentRoom) => {
      problemsArray = currentRoom.problemData;
      currentRoom.users.forEach((user) => {
        colorMap[user.userId] = user.color;
      });
      duration = currentRoom.duration;
      // ??
      res.json({ problemsArray, colorMap, duration });
    })
    .catch((err) => console.log(err));
});
app.post("/api/round/finished", (req, res) => {
  const { roomid } = req.body;
  let query = { roomId: roomid };
  Room.findOne(query)
    .then((room) => {
      Room.updateOne(query, { duration: 0 })
        .then((roomupd) => res.send("ok"))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});
app.post("/api/round/duration", (req, res) => {
  const { duration, roomid } = req.body;
  let query = { roomId: roomid };

  Room.updateOne(query, { duration: duration })
    .then((obj) => {
      res.send("ok");
    })
    .catch((err) => console.log(err));
});

app.get("/api/standings", (req, res) => {
  const { roomid } = req.query;

  let query = { roomId: roomid };
  if (roomid) {
    Room.find(query)
      .then((room) => res.json(room))
      .catch((err) => console.log(err));
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

io.on("connection", (socket) => {
  socket.on("join", (joinData) => {
    let roomid = joinData.roomid;
    let userid = joinData.userid;
    let isRefresh = joinData.refresh;
    let roomSize = joinData.roomsize;
    let create = joinData.create;
    let userObj = {
      socketId: socket.id,
      userId: userid,
      isReady: false,
    };

    var roomObj = null;
    let updatedSocketId = false;
    let roomExists = false;
    let query = { roomId: roomid };

    function doneWithBackend() {
      socket.join(roomid);
      if (create) {
        io.in(roomid).emit("roomCreated", roomObj);
      } else {
        if (isRefresh == 0) {
          io.in(roomid).emit("updateRoomData", roomObj);
        } else {
          io.to(socket.id).emit("updateRoomData", roomObj);
        }
      }
    }

    Room.exists(query)
      .then((res) => {
        if (res) {
          Room.findOne(query)
            .then((currentRoom) => {
              let currentUsers = currentRoom.users;
              currentUsers.forEach((user, userIndex) => {
                if (user.userId == userObj.userId) {
                  currentUsers[userIndex].socketId = userObj.socketId;
                  updatedSocketId = true;
                }
              });
              if (!updatedSocketId) {
                currentUsers.push(userObj);
              }
              roomObj = currentRoom;
              roomObj.users = currentUsers;
              Room.updateOne(query, { users: currentUsers })
                .then((res) => {
                  // console.log(`io/connection - ${res.nModified}`);
                  doneWithBackend();
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        } else {
          const newRoom = new Room({
            roomId: roomid,
            users: [],
            problemData: [],
            ended: true,
            roomSize: roomSize,
          });

          newRoom
            .save()
            .then((room) => {
              roomObj = room;
              doneWithBackend();
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  });

  socket.on("disconnect", () => {
    socket.leave();
  });

  socket.on("remove", (removeData) => {
    var user = removeData.user;
    var roomid = removeData.roomid;
    var roomObj = null;
    var query = { roomId: roomid };
    io.sockets.sockets.forEach((soc) => {
      if (soc.id == user.socketId) {
        Room.findOne(query)
          .then((currentRoom) => {
            let currentUsers = currentRoom.users;
            currentUsers = currentUsers.filter((userObj) => {
              return userObj.userId != user.userId;
            });

            roomObj = currentRoom;
            roomObj.users = currentUsers;
            Room.updateOne(query, { users: currentUsers })
              .then((res) => {
                io.to(user.socketId).emit("leaveRoom");
                soc.leave(roomid);
                io.in(roomid).emit("updateRoomData", roomObj);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    });
  });

  socket.on("startContest", (roomid) => {
    io.to(roomid).emit("startContest", roomid);
  });

  socket.on("ready", ({ user, roomid }) => {
    var roomObj;
    let query = { roomId: roomid };
    Room.findOne(query)
      .then((currentRoom) => {
        let currentUsers = currentRoom.users;
        currentUsers.forEach((cuser, userIdx) => {
          if (user.userId == cuser.userId) {
            let isReady = currentUsers[userIdx].isReady;
            currentUsers[userIdx].isReady = !isReady;
          }
        });
        roomObj = currentRoom;
        roomObj.users = currentUsers;
        Room.updateOne(query, { users: currentUsers }).then((res) => {
          io.to(roomid).emit("updateRoomData", roomObj);
        });
      })
      .catch((err) => console.log(err));
  });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`server running.. on ${PORT}`));
