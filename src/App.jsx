import { useState,useEffect } from 'react'
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
// <Confetti width={width} height={height} />;
import axios from "axios";

// -------------------------------------------------------------
import Intro from "./Components/Intro"
import Quiz from "./Components/Quiz";
import Error from "./Components/Error"
import Settings from "./Components/Settings";
// -------------------------------------------------------------


import './CSS/styles.css'
function App() {
  return (
    <div className="App">
      <Settings/>
    </div>
  );
}

export default App
