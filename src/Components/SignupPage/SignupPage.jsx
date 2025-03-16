import React, { useState } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [login, setlogin] = useState(false);
  return (
    <section className="signup-section">
      <div className="background-overlay">
        <img
          className="background-image"
          src="/images/logo.svg"
          width="40"
          height="40"
          alt="Background"
        />
      </div>
      <div className="content-container">
        <div className="" style={{}}>
          <img className="logo" src="/logo.svg" alt="Cyptex Logo" />
          <span
            className="title"
            style={{ color: "white", marginBottom: "10px" }}
          >
            RM_Cryptex
          </span>
        </div>

        <h1 className="title">Join Cyptex Today</h1>
        <p className="subtitle">
          Secure your digital future with seamless transactions and advanced
          blockchain technology.
        </p>
        <a href="#" className="google-signup-button">
          <svg className="google-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.35 11.1h-9.39v2.84h5.37c-.5 2.59-2.55 3.87-4.99 3.87-3.02 0-5.48-2.46-5.48-5.48s2.46-5.48 5.48-5.48c1.38 0 2.65.52 3.64 1.37l2.24-2.24c-1.62-1.5-3.73-2.43-6.02-2.43-5.42 0-9.81 4.39-9.81 9.81s4.39 9.81 9.81 9.81c4.98 0 9.38-3.53 9.38-9.4 0-.62-.07-1.22-.17-1.8z" />
          </svg>
          Sign Up with Google
        </a>
        <p className="divider">or use your email</p>
        <form className="signup-form">
          {login ? (
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                required
                placeholder="Enter your Name"
                className="form-input"
              />
            </div>
          ) : (
            ""
          )}

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              required
              type="password"
              placeholder="Create a password"
              className="form-input"
            />
          </div>

          <button className="signup-button">
            {login ? <Link to="/home">Login</Link> : <span>Sign Up</span>}
          </button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => setlogin(!login)} href="#" className="teal-link">
            {login ? "Sign Up" : "Login now"}
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;
