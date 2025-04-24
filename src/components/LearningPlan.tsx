import React from "react";
import LearningSteps from "./LearningSteps";
import ProgressBar from "./ProgressBar";
import "../styles/LearningPlan.css";

const LearningPlan = () => {
  return (
    <div className="learningPlan">
      <div className="title">Web Development</div>
      <div>Learning Plan</div>
      <LearningSteps></LearningSteps>
      <ProgressBar></ProgressBar>
    </div>
  );
};

export default LearningPlan;
