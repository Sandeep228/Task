import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Captcha.css";

function Capatcha() {
  const [question, setQuestion] = useState(generateQuestion());
  const [answer, setAnswer] = useState("");
  const [incorrectMessage, setIncorrectMessage] = useState("");
  const navigate = useNavigate();

  function generateQuestion() {
    const number1 = Math.floor(Math.random() * 12) + 2;
    const number2 = Math.floor(Math.random() * 12) + 2;

    return `${number1} + ${number2}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(answer) === eval(question)) {
      toast.success("Correct Answer");
      navigate("/login");
    }
    if (answer === "") {
      setIncorrectMessage("Captcha Box cannot be empty.");
    } else {
      setIncorrectMessage("Incorrect answer. Please try again.");
      setQuestion(generateQuestion());
      setAnswer("");
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
    setIncorrectMessage(""); // Reset incorrect message when input changes
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
              <h1 className="text-center">Captcha</h1>
              <p className="text-center">
                Please finish the captcha to proceed
              </p>
              <p className="text-center">Question: {question}</p>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Answer"
                  name="answer"
                  value={answer}
                  onChange={handleChange}
                />
                {incorrectMessage && (
                  <small className="text-danger">{incorrectMessage}</small>
                )}
              </div>
              <br />
              <div className="form-group text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capatcha;
