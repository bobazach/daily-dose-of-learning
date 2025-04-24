import React from "react";
import "../styles//ProgressBar.css";

const ProgressBar = () => {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{
          width: "25%",
          backgroundImage:
            "linear-gradient(to bottom right, rgb(0, 132, 255), rgb(0, 204, 255))",
        }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        25%
      </div>
    </div>
  );
};

export default ProgressBar;
