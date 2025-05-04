import React, { useState } from "react";
import LearningPlan from "../components/LearningPlan";
import CreateLearningPlan from "../components/CreateLearningPlan";
import "../styles/DashboardPage.css";

const DashboardPage = () => {
  type Plan = {
    title: string;
    steps: string[];
  };
  const [learningPlans, setLearningPlans] = useState<Plan[]>([]);

  const handleAddPlan = (title: string, steps: string[]) => {
    setLearningPlans((prev) => [...prev, { title, steps }]);
  };

  return (
    <>
      <div id="header">
        <h1>header placeholder</h1>
      </div>
      <div id="body">
        <CreateLearningPlan onGenerate={handleAddPlan} />
        <div>Your Learning Plans</div>
        <div id="learning-plan-container">
          {learningPlans.map((plan, index) => (
            <LearningPlan key={index} title={plan.title} steps={plan.steps} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
