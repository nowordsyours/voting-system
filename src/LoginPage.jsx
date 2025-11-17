import React, { useState } from "react";
import "./login.css";
import { ShieldCheck, Vote } from "lucide-react";

const LoginPage = () => {
  const [tab, setTab] = useState("voter");

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="icon-box">
          <Vote className="icon" />
        </div>

        <h1 className="login-title">Secure Voting</h1>
        <p className="login-sub">Your voice matters. Vote securely online.</p>

        {/* TABS */}
        <div className="tabs">
          <button
            className={tab === "voter" ? "tab active" : "tab"}
            onClick={() => setTab("voter")}
          >
            Voter
          </button>

          <button
            className={tab === "admin" ? "tab active" : "tab"}
            onClick={() => setTab("admin")}
          >
            Admin
          </button>
        </div>

        {/* FORM */}
        <form className="form">

          <div>
            <label className="label">
              {tab === "voter" ? "Voter ID" : "Admin ID"}
            </label>
            <input
              type="text"
              className="input"
              placeholder={tab === "voter" ? "Enter your Voter ID" : "Enter Admin ID"}
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />
          </div>

          {/* ⭐ FORGOT PASSWORD BELOW PASSWORD */}
          <p className="forgot-password">Forgot Password?</p>

          <button className="submit-btn">Sign In Securely</button>
        </form>

        <div className="secure">
          <ShieldCheck className="shield" />
          256-bit encrypted connection
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
