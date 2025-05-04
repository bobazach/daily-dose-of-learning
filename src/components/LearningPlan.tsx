import React from "react";
import LearningSteps from "./LearningSteps";
import ProgressBar from "./ProgressBar";
import "../styles/LearningPlan.css";

type LearningPlanProps = {
  title: string;
  steps: string[];
};

const LearningPlan = ({ title, steps }: LearningPlanProps) => {
  return (
    <div className="learningPlan">
      <div className="title">{title}</div>
      <div>Learning Plan</div>
      <LearningSteps steps={steps}></LearningSteps>
      <ProgressBar></ProgressBar>
    </div>
  );
};

export default LearningPlan;
