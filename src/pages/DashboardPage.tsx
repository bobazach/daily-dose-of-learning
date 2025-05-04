import React from "react";
import LearningPlan from "../components/LearningPlan";
import CreateLearningPlan from "../components/CreateLearningPlan";

const DashboardPage = () => {
  return (
    <>
      <div id="body">
        <CreateLearningPlan></CreateLearningPlan>
        <div>Your Learning Plans</div>
        <div id="learning-plan-container">
          <LearningPlan />
          <LearningPlan />
          <LearningPlan />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
