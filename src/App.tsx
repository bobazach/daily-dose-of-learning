import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import { useState } from "react";
import "./App.css";
import CreateLearningPlan from "./components/CreateLearningPlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <div id="body">
//         <CreateLearningPlan></CreateLearningPlan>
//         {/* <div>Your Learning Plans</div> */}
//         <div id="learning-plan-container">
//           <LearningPlan />
//           <LearningPlan />
//           <LearningPlan />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
