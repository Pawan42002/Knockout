import { useState, useEffect } from "react";
import "./Room.css";

const axios = require("axios");

export const UserCard = (props) => {
  var user = props.user.userId;
  var admin = props.admin;
  var userReady = props.user.isReady;
  var currentUser = sessionStorage.getItem("userid");

  const [imageURL, setimageURL] = useState();

  useEffect(() => {
    axios
      .get("https://codeforces.com/api/user.info?handles=" + user)
      .then((res) => {
        setimageURL(res.data.result[0].titlePhoto);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  var buttonSet = null;

  if (admin === currentUser) {
    if (currentUser === user) {
      buttonSet = (
        <button
          className="btn btn-danger text-responsive"
          onClick={() => props.remove(props.user)}
        >
          Leave
        </button>
      );
    } else {
      buttonSet = (
        <button
          className="btn btn-danger text-responsive"
          onClick={() => props.remove(props.user)}
        >
          Remove
        </button>
      );
    }
  } else {
    if (currentUser === user) {
      buttonSet = (
        <button
          className="btn btn-success text-responsive"
          onClick={(e) => {
            e.target.disabled = true;
            props.ready(props.user);
          }}
        >
          Ready
        </button>
      );
    }
  }

  return (
    <>
      <div className={"card my-sm-2 my-1 p-sm-2 p-1 mx-3"}>
        <img
          src={imageURL}
          className="img-thumbnail mx-auto my-2"
          alt="Loading Profile Image"
          style={{ height: "9vw", width: "9vw" }}
        />
        <div className="mx-auto text-center">
          <h5
            className={
              "text-responsive card-title " +
              (userReady ? "text-success" : "text-danger")
            }
          >
            {user}
          </h5>
          {buttonSet}
        </div>
      </div>
    </>
  );
};
