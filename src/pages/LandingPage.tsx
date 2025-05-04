import React from "react";
import { Link } from "react-router-dom";
import Typerwriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <>
      <h1>I want to learn</h1>
      <Typerwriter
        options={{
          strings: [
            "Web Development",
            "Snowboarding",
            "Baseball",
            "Baking Cookies",
          ],
          autoStart: true,
        }}
      ></Typerwriter>
      <Link to="/dashboard">
        <button>Start Learning</button>
      </Link>
    </>
  );
};

export default LandingPage;
