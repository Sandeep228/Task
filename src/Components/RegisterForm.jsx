import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/RegisterForm.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    month: "",
    day: "",
    year: "",
  });
  const [showMailInput, setShowMailInput] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      (formData.phoneNumber.trim() === "" && formData.email.trim() === "") ||
      formData.month.trim() === "" ||
      formData.day.trim() === "" ||
      formData.year.trim() === ""
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (formData.email !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error("Invalid email address.");
        return;
      }
    }

    console.log(`Credentials :${JSON.stringify(formData)}`);
    console.log(`Registration Successful`);
    navigate("/captcha"); // Redirect to the CAPTCHA page

    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      month: "",
      day: "",
      year: "",
    });
  };

  const handleMailInput = () => {
    setShowMailInput(true);
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center" style={{ color: "dodgerblue" }}>
                <i className="fab fa-twitter fa-2x"></i>
              </div>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <h3 style={{ fontFamily: "sans-serif" }}>
                    <b> Create an Account</b>{" "}
                  </h3>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    disabled={formData.email.trim() !== ""}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <h6 onClick={handleMailInput} style={{ color: "dodgerblue" }}>
                    Use email
                  </h6>
                  <br />
                  {showMailInput && (
                    <>
                      {" "}
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={formData.phoneNumber.trim() !== ""}
                      />
                      <br />
                    </>
                  )}
                </div>
                <div className="form-group">
                  <label className="bold-text">Date of Birth</label>
                  <p className="dob-para">
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin “dolorem
                    ipsum” roughly translated as “pain itself.”
                  </p>
                  <div className="row">
                    <div className="col">
                      <select
                        className="form-control"
                        name="month"
                        value={formData.month}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>
                    <div className="col">
                      <select
                        className="form-control"
                        name="day"
                        value={formData.day}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Day</option>
                        {Array.from({ length: 31 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col">
                      <select
                        className="form-control"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 100 }, (_, i) => (
                          <option key={2024 - i} value={2024 - i}>
                            {2024 - i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ borderRadius: "25px" }}
                  >
                    Next
                  </button>
                </div>
                <br />
                <p>
                  Already have an account?{" "}
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
