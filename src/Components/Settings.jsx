import Select from "./Select"
function Settings() {
  return (
    <div className="Settings">
      <form>
        <div className="go-back">
          <i class="fa-solid fa-xmark xmark-icon"></i>
        </div>
        <label
          className="amount-of-questions"
          htmlFor="amount-of-questions-input"
        >
          amount of questions
        </label>
        <input
          className="amount-of-questions-input"
          id="amount-of-questions-input"
          type="text"
        />
        <div className="amount-of-question-description">
          Must be a number between 1 and 50 inclusive
        </div>
        <Select />
        <Select />
        <Select />
      </form>
      <button className="apply-button">APPLY</button>
    </div>
  );
}

export default Settings;
