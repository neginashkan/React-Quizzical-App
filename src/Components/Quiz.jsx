import { useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
function Quiz({ data, handleAriaPressedClick}) {
  const [startQuiz, setStartQuiz] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const questions = data.map((question) => {
    return (
      <Question
        key={question.id}
        title={question.title}
        choices={question.options}
        handleAriaPressedClick={handleAriaPressedClick}
      />
    );
  });
  return (
    <div className="Quiz">
      <div className="all-questions-container">{questions}</div>
      <button className="start--check-answer-button">
        {!startQuiz ? "Start quiz" : "Check answers"}
      </button>
      {showAnswers  && <Answers />}
    </div>
  );
}

export default Quiz;
