import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { SiGoogle, SiApple } from "react-icons/si";
import HomeImg from "../Images/images.jfif";
import "../Styles/Home.css";

function Home() {
  const handleGoogleSignIn = () => {
    window.open("https://accounts.google.com", "_blank");
  };

  const handleAppleSignIn = () => {
    window.open("https://appleid.apple.com", "_blank");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 home-image-container">
          <img src={HomeImg} alt="Background" className="home-image" />
        </div>
        <div className="col-md-6 login-container">
          <FaTwitter size={30} color="dodgerblue" className="twitter-icon" />
          <h1 className="login-heading">Happening now</h1>
          <h3>Join Twitter Today</h3>
          <br />
          <button className="btn btn-google" onClick={handleGoogleSignIn}>
            <SiGoogle size={30} color="red" /> Sign in with Google
          </button>
          <br />
          <button className="btn btn-apple" onClick={handleAppleSignIn}>
            <SiApple size={30} color="gray" /> Sign in with Apple
          </button>
          <div className="separator">
            <span className="separator-text text-center">or</span>
            <br />
          </div>
          <Link
            to="/register"
            className="others"
            style={{ textDecoration: "none" }}
          >
            <p className="signin-text">Sign in with email or phoneNumber</p>
          </Link>
          <div className="signup-options">
            <p className="policy-text">
              By signing in, you agree to our{" "}
              <Link to="/terms" className="policy-link">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="policy-link">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="signup-link">
              Already have an account?{" "}
              <Link to="/login" className="signup-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
