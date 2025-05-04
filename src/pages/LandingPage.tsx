import React from "react";
import { Link } from "react-router-dom";
import Typerwriter from "typewriter-effect";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-box">
        <h1>I want to learn...</h1>
        <div className="typewriter">
          <Typerwriter
            options={{
              strings: [
                "Web Development",
                "Poker Theory",
                "Tennis",
                "Pastry Baking",
              ],
              delay: 100,
              deleteSpeed: 50,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Link to="/dashboard">
          <button className="start-button">Start Learning</button>
        </Link>
      </div>
      <img
        src="public/paper_plane.svg"
        alt="paper plane"
        className="paper-plane"
      />
    </div>
  );
};

export default LandingPage;
