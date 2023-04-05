import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
// <Confetti width={width} height={height} />;
import axios from "axios";

// -------------------------------------------------------------
import Intro from "./Components/Intro";
import Quiz from "./Components/Quiz";
import Error from "./Components/Error";
import Settings from "./Components/Settings";
import Data from "./JavaScript/Data"
// -------------------------------------------------------------

import "./CSS/styles.css";
function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [data, setData] = useState(Data);
  function handleAriaPressedClick(id){
    alert(id)
  }
  function introHandleClick() {
    setShowIntro((pervShowIntro) => !pervShowIntro);
  }
  return (
    <div className="App">
      {showIntro ? (
        <Intro key={nanoid()} introHandleClick={introHandleClick} />
      ) : (
        <Quiz
          key={nanoid()}
          data={data}
            handleAriaPressedClick={handleAriaPressedClick}
        />
      )}
    </div>
  );
}

export default App;
