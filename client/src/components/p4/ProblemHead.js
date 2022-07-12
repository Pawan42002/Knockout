import { Problem } from "./Problem";
import { useEffect } from "react";
import axios from "axios";
import { Timer } from "./Timer";
import "./ProblemHead.css";

export const ProblemHead = ({ problemsArray, duration, colorMap, roomid }) => {
  let timerStyle = {
    width: "25vw",
    maxWidth: "10rem",
    position: "fixed",
    top: "79vh",
    right: "1rem",
    zIndex: "50",
  };

  let findProblemArray = (currentProblem) => {
    let flag = problemsArray.some((e) => {
      return (
        e.contestId === currentProblem.contestId &&
        e.index === currentProblem.index
      );
    });
    return flag;
  };

  let fetchData = () => {
    for (let [handle, handleColor] of Object.entries(colorMap)) {
      let statusUrl =
        "https://codeforces.com/api/user.status?handle=" +
        handle +
        "&from=1&count=1";
      axios
        .get(statusUrl)
        .then((res) => {
          let currentProblem = res.data.result[0];
          if (
            currentProblem.verdict === "OK" &&
            findProblemArray(currentProblem.problem)
          ) {
            axios
              .post("http://localhost:4000/api/checkAndMark", {
                currentProblem: currentProblem,
                handle: handle,
                roomid: roomid,
              })
              .then()
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    const temp = setInterval(() => fetchData(), 10000);
    return () => clearInterval(temp);
  }, []);

  return (
    <div>
      <div className="container d-grid">
        <div className="row p-0 m-0 pb-5">
          <div className="col-12 border border-black rounded p-2 mb-5">
            <table className="table table-bordered my-2">
              <thead className="text-responsive table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Problems</th>
                  <th scope="col">Rating</th>
                </tr>
              </thead>
              <tbody>
                {problemsArray
                  ? problemsArray.map((problem, index) => {
                      return (
                        <Problem
                          key={index}
                          problem={problem}
                          index={index}
                          colorMap={colorMap}
                        />
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div style={timerStyle} className="shadow-lg rounded">
        <Timer duration={duration} roomid={roomid} />
      </div>
    </div>
  );
};
