function Error() {
  return (
    <div className="Error">
      <div className="internet-state">
        <p className="internet-state--massage">You’re offline</p>
        <p className="internet-state--sub-massage">
          Thus you can’t request new questions.
        </p>
      </div>
      <div className="finding-state">
        <p className="finding-state--massage">Unable to find questions</p>
        <p className="finding-state--sub-massage">
          Most probably there are no questions for such combination of settings.
          Try to change settings.
        </p>
        <div className="error-buttons">
        <button className="try-again">Try again</button>
        <button className="update-settings">Update settings</button>
        <button className="update-settings">New Game</button>
        </div>
      </div>
    </div>
  );
}
export default Error;
