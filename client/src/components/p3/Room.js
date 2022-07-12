import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { socket } from "../../Socket";
import { UserCard } from "./UserCard";
import "./Room.css";
var admin;

export const Room = () => {
  const history = useHistory();
  const location = useLocation();
  var randomColor = require("randomcolor");

  let locationPath = location.pathname;
  var roomid = locationPath.split("/").pop();
  let definedColors = [
    "success",
    "warning",
    "info",
    "danger",
    "primary",
    "dark",
  ];

  const [roomData, setRoomData] = useState({ users: [] });
  const [problemData, setProblemData] = useState({
    problems: 0,
    lrating: 0,
    urating: 0,
  });
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/checkRoomCode", { roomCode: roomid })
      .then((res) => {
        if (res.data.flag == true) {
          var userid = sessionStorage.getItem("userid");
          var refresh = sessionStorage.getItem("refresh");
          var roomSize = sessionStorage.getItem("roomsize");
          var joiningData = {
            userid: userid,
            roomid: roomid,
            refresh: refresh,
            roomsize: roomSize,
          };

          socket.emit("join", joiningData);
          if (refresh === 0) {
            sessionStorage.setItem("refresh", 1);
          }
        } else {
          history.replace("/invalid");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  socket.on("updateRoomData", (roomData) => {
    sessionStorage.setItem("roomData", JSON.stringify(roomData));
    admin = roomData.users[0].userId;
    setRoomData(roomData);
  });

  socket.on("leaveRoom", () => {
    history.replace("/dashboard");
  });

  socket.on("startContest", (roomid) => {
    history.push({
      pathname: `/round/${roomid}`,
    });
  });

  const remove = (user) => {
    let removeData = {
      user,
      roomid,
    };
    socket.emit("remove", removeData);
  };

  const [problemsLoading, setProblemsLoading] = useState(true);
  var problems = [];
  var colorMap = {};

  const validate = () => {
    let endTime = new Date().getTime() + duration * 60 * 1000;
    axios
      .post("http://localhost:4000/api/round/duration", {
        roomid: roomid,
        duration: endTime,
      })
      .then((res) => {
        console.log(res.data);
        socket.emit("startContest", roomid);
      })
      .catch((err) => console.log(err));
  };

  const generate = () => {
    setProblemsLoading(true);
    var problemInt = parseInt(problemData.problems);
    var lrangeInt = parseInt(problemData.lrating);
    var urangeInt = parseInt(problemData.urating);

    problemInt = Math.min(problemInt, 30);
    problemInt = Math.max(problemInt, 1);

    lrangeInt = Math.max(lrangeInt, 800);
    lrangeInt = Math.min(lrangeInt, 3500);
    urangeInt = Math.max(urangeInt, 800);

    urangeInt = Math.max(urangeInt, lrangeInt);
    urangeInt = Math.min(urangeInt, 3500);

    for (let i = 800; i <= 3500; i += 100) {
      if (lrangeInt <= i) {
        lrangeInt = i;
        break;
      }
    }
    for (let i = 800; i <= 3500; i += 100) {
      if (urangeInt <= i) {
        urangeInt = i;
        break;
      }
    }

    let problemApiURL = "https://codeforces.com/api/problemset.problems?";
    let problemsArray = [];

    axios
      .get(problemApiURL)
      .then((res) => {
        let arraySize = res.data.result.problems.length;
        let taken = new Map();

        for (let i = 0; i < problemInt; ) {
          let idx = Math.floor(Math.random() * arraySize);

          let problemObj = res.data.result.problems[idx];

          if (
            problemObj.rating &&
            problemObj.rating >= lrangeInt &&
            problemObj.rating <= urangeInt &&
            !taken[idx]
          ) {
            problemObj["userSolved"] = "";
            problemsArray.push(problemObj);
            taken[idx] = true;
            i++;
          }
        }
        console.log(problemsArray);
        roomData.users.forEach((user) => {
          colorMap[user.userId] = randomColor({ luminosity: "light" });
        });
        console.log(colorMap);
        problems = problemsArray;

        axios
          .post("http://localhost:4000/api/round/problems", {
            roomid: roomid,
            problemsArray: problems,
            colorMap: colorMap,
          })
          .then((res) => {})
          .catch((err) => console.log(err));

        setProblemsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  let ready = (user) => {
    let readyData = {
      user,
      roomid,
    };
    socket.emit("ready", readyData);
  };

  return (
    <div className="customBgRoom">
      {admin === sessionStorage.getItem("userid") ? (
        <div className="container d-grid">
          <div className="row px-0">
            <div className="col-7 px-0">
              <div className="input-group mb-3 my-3">
                <span className="input-group-text px-2 text-responsive fw-bold">
                  Number of Problems
                </span>
                <input
                  required={true}
                  type="number"
                  min="1"
                  className="form-control text-responsive"
                  placeholder="Enter Number of problems"
                  id="numberOfProblems"
                  onChange={(e) =>
                    setProblemData((prevState) => ({
                      ...prevState,
                      problems: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="mx-0 col-5 px-0 mt-3 justify-content-center text-end">
              <button
                className="btn btn-info btn-block text-responsive px-1"
                onClick={() => navigator.clipboard.writeText(roomid)}
              >
                Room Code <i className="fas fa-copy"></i>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-7 px-0">
              <div className="input-group">
                <span className="input-group-text px-2 text-responsive fw-bold">
                  Rating Range
                </span>
                <input
                  required={true}
                  type="number"
                  min="800"
                  max="3500"
                  step="100"
                  placeholder="Starting from"
                  className="form-control text-responsive"
                  id="startRating"
                  onChange={(e) =>
                    setProblemData((prevState) => ({
                      ...prevState,
                      lrating: e.target.value,
                    }))
                  }
                />
                <input
                  required={true}
                  type="number"
                  min="800"
                  max="3500"
                  step="100"
                  placeholder="Ending at"
                  className="form-control text-responsive"
                  id="endRating"
                  onChange={(e) =>
                    setProblemData((prevState) => ({
                      ...prevState,
                      urating: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="col-5 text-end" style={{ paddingRight: 0 }}>
              <div className="input-group mb-3">
                <span className="input-group-text px-2 text-responsive fw-bold">
                  Duration
                </span>
                <input
                  required={true}
                  type="number"
                  min="1"
                  className="form-control text-responsive"
                  placeholder="Duration in minutes"
                  id="duration"
                  onChange={(e) =>
                    setDuration(Math.floor(parseInt(e.target.value)))
                  }
                />
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col px-0">
              <button
                className="btn btn-primary btn-block text-responsive fw-bold m-auto text-responsive"
                onClick={generate}
              >
                Generate Problems
              </button>
            </div>
          </div>

          <div className="row text-center my-3">
            <div className="col">
              <button
                className="btn w-25 btn-success btn-block text-responsive fw-bold"
                disabled={problemsLoading}
                onClick={validate}
              >
                {" "}
                Start Contest
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="fluid-container d-flex justify-content-around align-content-around py-3 flex-wrap">
        {roomData.users
          ? roomData.users.map((user, idx) => {
              return (
                <UserCard
                  user={user}
                  admin={admin}
                  remove={remove}
                  ready={ready}
                  key={idx}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
