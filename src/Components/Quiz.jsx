import Question from "./Question";
import Answers from "./Answers";
function Quiz() {
  return (
    <div className="Quiz">
      <div className="all-questions-container">
        {/* map over all question play it */}
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      {/* buuton */}
      <button className="start--check-answer-button">
        Start quiz / Check answers
      </button>
      <Answers />
    </div>
  );
}

export default Quiz;
