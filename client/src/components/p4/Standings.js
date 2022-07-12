import axios from "axios";
import React, { useState, useEffect } from "react";
import { Spinner } from "../base/Spinner";
import { useParams, Link } from "react-router-dom";
import "./UserColors.css";

export const Standings = () => {
  const { roomid } = useParams();
  const [usersToPoints, setUsersToPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/standings", {
        params: {
          roomid: roomid,
        },
      })
      .then((res) => {
        let roomDatum = res.data[0];
        let newUsersToPoints = [];
        roomDatum.users.forEach((user) => {
          newUsersToPoints.push([user.userId, 0]);
        });
        roomDatum.problemData.forEach((problem) => {
          newUsersToPoints.forEach((entry, index) => {
            if (entry[0] === problem.userSolved) {
              newUsersToPoints[index][1] += problem.rating;
            }
          });
        });
        newUsersToPoints.sort(([, a], [, b]) => b - a);
        setUsersToPoints(newUsersToPoints);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container d-grid my-3">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <span className="fs-3 mx-1">Standings</span>
            <div className="row mx-1">
              <div className="col-12 rounded p-0">
                <div className="container p-0">
                  <table className="table table-stripped table-hover tableStyle">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Who</th>
                        <th scope="col">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersToPoints.map((entry, index) => {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{entry[0]}</td>
                            <td>{entry[1]}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row my-3">
              <div className="col-12">
                <Link className="mx-2 btn btn-outline-primary" to="/dashboard">
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
