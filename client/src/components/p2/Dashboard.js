import React from "react";
import "./Dashboard.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { socket, handleCreate, handleJoin } from "../../Socket";
import { useAuth } from "../../context/AuthContext";

export const Dashboard = () => {
  const history = useHistory();
  var userid = sessionStorage.getItem("userid");
  const [room, setRoom] = useState({ id: "", size: "" });
  const [joined, setJoined] = useState(false);
  const [handle, setHandle] = useState("");
  let [firstName, setFirstName] = useState("");
  let [message, setMessage] = useState("");
  let [messageHandle, setMessageHandle] = useState("");
  let handleRef = useRef();
  let { user } = useAuth();
  let roomCodeRef = useRef();
  var setIntervalVar;
  var randomId = require("../../../node_modules/random-id");

  let intervalFunction = async () => {
    if (user && !handle) {
      axios
        .post("http://localhost:4000/api/findHandle", { username: user.email })
        .then((res) => {
          sessionStorage.setItem("userid", res.data);
          setHandle(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    setFirstName(randomId(20, "aA0"));
    (async () => {
      await intervalFunction();
    })();
  }, []);

  let handleValidate = (e) => {
    let userInfoUrl =
      "https://codeforces.com/api/user.info?handles=" + handleRef.current.value;

    axios
      .get(userInfoUrl)
      .then((res) => {
        if (res.data.result[0].firstName === firstName) {
          axios
            .post("http://localhost:4000/api/updateUserHandle", {
              handle: handleRef.current.value,
              username: user.email,
            })
            .then((res) => {
              sessionStorage.setItem("userid", handleRef.current.value);
              setHandle(handleRef.current.value);
              setMessageHandle("");
            })
            .catch((err) => console.log(err));
        } else {
          setMessageHandle(
            "Either you copied a wrong string or you entered a wrong handle"
          );
        }
      })
      .catch((err) => console.log(err));
  };

  let handleUpdate = (e) => {
    if (window.confirm("Are you sure you want to update Handle ?")) {
      axios
        .post("http://localhost:4000/api/deleteHandle", {
          username: user.email,
        })
        .then((res) => {
          sessionStorage.setItem("userid", "");
          setHandle("");
        })
        .catch((err) => console.log(err));
    }
  };

  let roomValidate = () => {
    axios
      .post("http://localhost:4000/api/checkRoomCode", {
        roomCode: roomCodeRef.current.value,
      })
      .then((res) => {
        setMessage(res.data.message);

        if (res.data.flag === true) {
          userid = handle;
          handleJoin(userid, room.id, socket);
          setJoined(true);
          setMessage("");
        }
      })
      .catch((err) => console.log(err));
  };

  socket.on("roomCreated", (roomData) => {
    history.push(`/room/${room.id}`);
  });

  if (joined) {
    history.push(`/room/${room.id}`, { params: room.id });
  }

  return (
    <div className="p-0 m-0 customBgDash">
      <div className="p-sm-4 px-1 bg-dark text-light w-100 d-grid">
        <div className="row mx-2">
          <div className="col-md-2 col-sm-1 col-0"></div>
          <div className="col-md-8 col-sm-10 col-12">
            {handle ? null : (
              <div className="alert alert-info p-1 my-1" role="alert">
                {"Paste this string in firstname field  - "}
                {<strong>{firstName}</strong>}
              </div>
            )}
            {messageHandle ? (
              <div className="alert alert-danger p-1 my-1" role="alert">
                {messageHandle}
              </div>
            ) : null}
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-2 col-sm-1 col-0"></div>
          <div className="col-md-6 col-sm-8 col-12 text-info">
            <div className="input-group">
              <span className="input-group-text">Handle</span>
              <input
                type="text"
                className="form-control"
                ref={handleRef}
                placeholder={handle ? handle : "Enter your CF Handle"}
              />
            </div>
          </div>
          {handle ? (
            <button
              className="col-md-2 col-sm-2 col-6 my-sm-0 my-2 mx-auto btn btn-success btn-block p-1"
              onClick={(e) => handleUpdate(e)}
            >
              Update
            </button>
          ) : (
            <button
              className="col-md-2 col-sm-2 col-6 my-sm-0 my-2 mx-auto btn btn-success btn-block p-1"
              onClick={(e) => handleValidate(e)}
            >
              Validate
            </button>
          )}
          <div className="col-md-2 col-sm-1 col-0"></div>
        </div>
      </div>

      {
        <div className="p-sm-5 p-4 container-fluid border w-50 justify-content-center my-md-5 my-3 shadow mb-5 rounded bg-light">
          <div className="row py-2">
            <div className="col-md-7 col-sm-12 px-0">
              <div className="dropdown h-100">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setRoom((prevState) => ({
                      ...prevState,
                      ["size"]: e.target.value,
                    }));
                  }}
                >
                  <option defaultValue value="2">
                    Room Size
                  </option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="3">Four</option>
                  <option value="3">Five</option>
                  <option value="6">Six</option>
                </select>
              </div>
            </div>
            <div className="col-md-1 col-sm-0"></div>
            <div className="col-md-4 col-sm-12 px-0 mx-sm-auto my-md-0 my-2">
              <button
                className="w-100 btn btn-primary"
                onClick={() => {
                  userid = handle;
                  handleCreate(userid, room.size, socket);
                  room.id = sessionStorage.getItem("roomid");
                }}
                disabled={handle === "" ? true : false}
              >
                Create A Room
              </button>
            </div>
          </div>
          <div id="lineor">
            <div className="lines"></div>
            <div>
              <span>OR</span>
            </div>
            <div className="lines"></div>
          </div>
          <div className="row px-0 py-2">
            <div className="col-md-7 col-sm-12 px-0">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setRoom((prevState) => ({
                    ...prevState,
                    ["id"]: e.target.value,
                  }));
                }}
                ref={roomCodeRef}
              />
            </div>
            <div className="col-md-1 col-sm-0"></div>
            <div className="col-md-4 col-sm-12 px-0 mx-sm-auto my-md-0 my-2">
              <button
                className="w-100 btn btn-danger"
                onClick={() => {
                  roomValidate();
                }}
                disabled={handle === "" ? true : false}
              >
                Join A Room
              </button>
            </div>
          </div>
          {message ? (
            <div
              className="alert alert-danger row p-1 px-2 my-0 mt-1"
              role="alert"
            >
              {" "}
              {message}{" "}
            </div>
          ) : null}
        </div>
      }
    </div>
  );
};
