import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export const SignUp = () => {
  const history = useHistory();
  let emailRef = useRef();
  let passwordRef = useRef();
  let passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true); //
      await signUp(emailRef.current.value, passwordRef.current.value);
      axios
        .post("http://localhost:4000/api/updateUser", {
          email: emailRef.current.value,
        })
        .then((res) => {
          history.push("/dashboard");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="px-4 p-sm-0 customBg">
      <div className="container-fluid d-grid">
        <section className="row justify-content-center align-items-center p-0">
          <section
            className="col-12 col-sm-6 col-md-5 form-container "
            id="login-box"
          >
            <div
              className="m-0 p-1 border-bottom bg-dark align-items-center text-light fs-4"
              id="text"
            >
              Signup
            </div>
            <form id="forms">
              {error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : (
                ""
              )}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" ref={emailRef} />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  ref={passwordRef}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  ref={passwordConfirmRef}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={(e) => handleSubmit(e)}
                disabled={loading}
              >
                SignUp
              </button>
              <Link className="mx-2 btn btn-outline-primary" to="/login">
                LogIn
              </Link>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
};
