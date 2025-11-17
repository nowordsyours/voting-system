import React from "react";
import LoginPage from "./LoginPage";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="layout">

      {/* LEFT SIDE */}
      <div className="left">
        <div className="blur-panel">

          <h1 className="title">Voting System</h1>
          <p className="subtitle">Your voice matters. Vote securely online.</p>

          <div className="stats-row">

            <div className="stat-item">
              <h3>Candidates</h3>
              <div className="stat-box">
                <span className="stat-number">12</span>
              </div>
            </div>

            <div className="stat-item">
              <h3>Voters</h3>
              <div className="stat-box">
                <span className="stat-number">245</span>
              </div>
            </div>

            <div className="stat-item">
              <h3>Voted</h3>
              <div className="stat-box">
                <span className="stat-number">180</span>
              </div>
            </div>

          </div>

          <p className="footer-text">
            “Every vote matters. India, the world’s largest democracy, ensures
            secure and accessible elections for every citizen—no matter how far
            they live.”
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <LoginPage />
      </div>

    </div>
  );
};

export default HomePage;
