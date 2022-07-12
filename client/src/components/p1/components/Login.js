import React from "react";
import { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  const { logIn, signInWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(email, password);
      history.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const handleGoogle = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signInWithGoogle();
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="px-4 p-sm-0 customBg">
      <div className="container-fluid d-grid">
        <div className="row justify-content-center align-items-center p-0">
          <div
            className="col-12 col-sm-6 col-md-5 form-container"
            id="login-box"
          >
            <div
              className="m-0 p-1 border-bottom fs-4 text-light bg-dark"
              id="text"
            >
              Login
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
                <input
                  type="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                disabled={loading}
                onClick={(e) => handleSubmit(e)}
                className="btn btn-primary"
              >
                LogIn
              </button>
              <Link className="mx-2 btn btn-outline-primary" to="/signup">
                SignUp
              </Link>
              <div id="lineor" className="my-2">
                <div className="lines"></div>
                <div>
                  <span>OR</span>
                </div>
                <div className="lines"></div>
              </div>

              <button
                className="btn btn-outline-danger btn-block w-100 text-responsive"
                onClick={(e) => handleGoogle(e)}
              >
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
