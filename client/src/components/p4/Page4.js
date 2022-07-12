import { useEffect, useState } from "react";
import { UserColors } from "./UserColors";
import { ProblemHead } from "./ProblemHead";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./UserColors.css";

var problemsArray;
var colorMap;
var duration;

export const Page4 = () => {
  const [loading, setLoading] = useState(true);
  var roomid = sessionStorage.getItem("roomid");
  const history = useHistory();

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/checkRoomCode", { roomCode: roomid })
      .then((res) => {
        // if (res.data.flag === false) {
        //     history.push("/*");
        // }
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:4000/api/round", {
        params: {
          roomid,
        },
      })
      .then((res) => {
        problemsArray = res.data.problemsArray;
        colorMap = res.data.colorMap;
        duration = res.data.duration;
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-0 m-0 customBgRound">
      {!loading ? <UserColors colorMap={colorMap} /> : null}
      {!loading ? (
        <ProblemHead
          problemsArray={problemsArray}
          duration={duration}
          colorMap={colorMap}
          roomid={roomid}
        />
      ) : null}
    </div>
  );
};
