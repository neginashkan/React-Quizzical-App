function Intro({ introHandleClick }) {
  return (
    <div className="Intro">
      <h1 className="title">Quizzical</h1>
      <h2 className="subtitle">Let's get quizzical</h2>
      <button className="settings-button" onClick={introHandleClick}>
        Settings
      </button>
    </div>
  );
}
export default Intro;