import React from "react";
import "../styles/CreateLearningPlan.css";

const CreateLearningPlan = () => {
  return (
    <div className="learning-plan-wrapper">
      <label htmlFor="learningInput" className="learning-label">
        What do you want to learn?
      </label>
      <input
        id="learningInput"
        className="learning-input"
        type="text"
        placeholder="Web Development, Data Science, Spanish..."
      />
      <button className="generate-button">Generate Learning Plan</button>
    </div>
  );
};

export default CreateLearningPlan;
