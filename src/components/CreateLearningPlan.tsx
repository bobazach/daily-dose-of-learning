import React, { useState, useEffect } from "react";
import "../styles/CreateLearningPlan.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

type CreateLearningPlanProps = {
  onGenerate: (title: string, steps: string[]) => void;
};

const CreateLearningPlan = ({ onGenerate }: CreateLearningPlanProps) => {
  const [geminiInput, setGeminiInput] = useState("");
  const [promptResponse, setPromptResponse] = useState<string[]>([]);

  useEffect(() => {
    console.log("Prompt Response Updated:", promptResponse);
  }, [promptResponse]);

  const generateResponse = async () => {
    console.log(Date.now());
    let prompt = `I want to learn ${geminiInput}. 
                  Give me a 5-step learning plan. 
                  Return ONLY a JSON array of short, actionable step titles. 
                  Example format: ["Learn HTML basics", "Practice CSS", "Start JavaScript fundamentals", "Build a small project", "Deploy it online"]
                  Do not add any explanations or formatting. 
                  Do not wrap the output in tripple backticks.
                  Do not label is with 'json' or use Markdown formatting.
                  Just output raw JSON, nothing else.`;
    // Tradeoffs between text cleaning and prompting?

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      try {
        const stepsArray = JSON.parse(text);
        onGenerate(geminiInput, stepsArray);
        setPromptResponse(stepsArray);
        setGeminiInput("");
      } catch (parseError) {
        console.log("Invalid JSON", parseError);
      }
    } catch (apiError) {
      console.error("Something wemt wrong", apiError);
    }
  };

  const handleClick = () => {
    if (!geminiInput.trim()) {
      alert("Nothing entered");
      return;
    }
    generateResponse();
  };

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
        value={geminiInput}
        onChange={(e) => setGeminiInput(e.target.value)}
      />
      <button className="generate-button" onClick={handleClick}>
        Generate Learning Plan
      </button>
    </div>
  );
};

export default CreateLearningPlan;
