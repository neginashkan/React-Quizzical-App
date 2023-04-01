function Question() {
  return (
    <div className="Question">
      <h3 className="question-title">Category</h3>
      <div className="options-container">
        {/* #TODO:
            [map over and cereate buttons and ad here] */}
        <button className="choice-button checked">Any Category</button>
        <button className="choice-button">General Knowledge</button>
        <button className="choice-button">Entertainment: Books</button>
        <button className="choice-button">Entertainment: Music</button>
        <button className="choice-button">Entertainment: Film</button>
        <button className="choice-button">Entertainment: Film</button>
        <button className="choice-button">Entertainment: Film</button>
        <button className="choice-button">Entertainment: Film</button>
        <button className="choice-button">Entertainment: Film</button>
        <button className="choice-button">Entertainment: Film</button>
      </div>
    </div>
  );
}

export default Question;
