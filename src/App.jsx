import { useState,useEffect } from 'react'
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
// <Confetti width={width} height={height} />;
import axios from "axios";

// -------------------------------------------------------------
import Intro from "./Components/Intro"
import Quiz from "./Components/Quiz";
// -------------------------------------------------------------


import './CSS/styles.css'
function App() {
  return (
    <div className="App">
      <Quiz/>
    </div>
  );
}

export default App
