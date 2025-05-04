import React from "react";
import mockData from "../data/mockLearningPlans.json";
import "../styles/LearningSteps.css";

// interface LearningStepData {
//   id: number;
//   createdAt: Date;
//   title: string;
//   steps: [];
//   completed: [];
// }

type LearningStepsProps = {
  steps: string[];
};

const LearningSteps = ({ steps }: LearningStepsProps) => {
  return (
    <>
      <ul className="list-group">
        {steps.map((step, index) => (
          <li key={index} className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
            />
            {step}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LearningSteps;
