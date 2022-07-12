import { io } from "socket.io-client";
var randomId = require("random-id");

export const socket = io("http://localhost:4000/");

export const handleJoin = (userid, roomid, socket) => {
  sessionStorage.setItem("userid", userid);
  sessionStorage.setItem("roomid", roomid);
  sessionStorage.setItem("refresh", 0);
};

export const handleCreate = (userid, roomsize, socket) => {
  var roomid = randomId(12, "aA0");
  sessionStorage.setItem("userid", userid);
  sessionStorage.setItem("roomid", roomid);
  sessionStorage.setItem("roomsize", roomsize);
  sessionStorage.setItem("refresh", 0);
  var joiningData = {
    userid: userid,
    roomid: roomid,
    refresh: 0,
    roomsize: roomsize,
    create: true,
  };
  socket.emit("join", joiningData);
};
