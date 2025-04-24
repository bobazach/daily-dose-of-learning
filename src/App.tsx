import { useState } from "react";
import LearningPlan from "./components/LearningPlan";
import "./App.css";
import CreateLearningPlan from "./components/CreateLearningPlan";

function App() {
  return (
    <>
      <div id="body">
        <CreateLearningPlan></CreateLearningPlan>
        {/* <div>Your Learning Plans</div> */}
        <div id="learning-plan-container">
          <LearningPlan />
          <LearningPlan />
          <LearningPlan />
        </div>
      </div>
    </>
  );
}

export default App;
