import React, { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you Sure?",
  "Really sure?",
  "Pretty please",
  "Pwetty please",
  "pwetty plz :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="kiss"
            src="https://tenor.com/view/bear-kiss-bear-kisses-kiss-kisses-love-gif-22536058.gif"
            className="kiss"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://tenor.com/view/jump-bear-cute-hearts-love-gif-16290134.gif"
            className="hearts"
          />
          <div>Will You be my Valentine</div>
          <div>
            <button
              className="yesButton"
              onClick={() => setYesPressed(true)}
              style={{ fontSize: yesButtonSize }}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
