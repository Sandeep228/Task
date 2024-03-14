import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import "../Styles/LoginForm.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username) {
      setUsernameError("Please enter your email.");
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Please enter your password.");
    } else {
      setPasswordError("");
    }

    if (!username || !password) {
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter and one symbol."
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setUsernameError("Invalid email address.");
      return;
    }

    // Simulating login logic
    console.log("Login successful!");
    toast.success("Login successful!");
    // Redirect or perform further actions after successful login
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center" style={{ color: "dodgerblue" }}>
                <FaTwitter size={30} />
              </div>
              <br />
              <h1 className="text-center">Log in to Twitter</h1>
              <form onSubmit={handleLogin}>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <small className="text-danger">{usernameError}</small>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <small className="text-danger">{passwordError}</small>
                  <br />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary">
                    Log in
                  </button>
                </div>
                <br />
                <div class="others">
                  <Link to="/forgotPassword" className="others">
                    {" "}
                    <p className="text-left">Forgot Password?</p>
                  </Link>
                  <Link to="/register" className="others">
                    {" "}
                    <p className="text-right">Sign up</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
