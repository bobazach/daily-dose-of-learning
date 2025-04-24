import React from "react";
import mockData from "../data/mockLearningPlans.json";
import "../styles/LearningSteps.css";

interface LearningStepData {
  id: number;
  createdAt: Date;
  title: string;
  steps: [];
  completed: [];
}

const LearningSteps = () => {
  return (
    <>
      {/* {mockData.map((item) => (
        <div key={item.id}>
          {item.id} - {item.title}
        </div>
      ))} */}
      <ul className="list-group">
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          {mockData[0].steps[0]}
        </li>
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          {mockData[0].steps[1]}
        </li>
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          {mockData[0].steps[2]}
        </li>
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          {mockData[0].steps[3]}
        </li>
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          {mockData[0].steps[4]}
        </li>
      </ul>
    </>
  );
};

export default LearningSteps;
