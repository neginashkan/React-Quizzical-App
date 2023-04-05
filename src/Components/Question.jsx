function Question({ title, choices, handleAriaPressedClick}) {
  const options = choices.map((option) => {
    return (
      <button
        onClick={() => (handleAriaPressedClick(option.id))}
        className={`choice-button ${option.ariaPressed && "checked"}`}
      >
        {option.name}
      </button>
    );
  });
  return (
    <div className="Question">
      <h3 className="question-title">{title}</h3>
      <div className="options-container">{options}</div>
    </div>
  );
}

export default Question;
