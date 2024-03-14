import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTwitter } from "react-icons/fa";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email) {
      return toast.error("Please enter your email address.");
    }

    // Simulating password reset process
    console.log(`Password reset email sent to: ${email}`);
    toast.success("Check your email inbox for the password reset link.");

    navigate("/");
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <FaTwitter size={30} style={{ color: "#1DA1F2" }} />
              <h2 className="mt-3">Forgot Password?</h2>
              <p>
                Enter the email address associated with your Twitter account,
                and we'll send you a link to reset your password.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <br />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
