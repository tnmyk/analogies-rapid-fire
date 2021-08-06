import { useState } from "react";
import "../../css/play.css";
const Play = () => {
  const [preference, setPreference] = useState({
    numberofgames: 1,
    timepergame: 30,
  });
  return (
    <div class="play">
      <h1 class="play-h1">Play game now!</h1>
      <p>Choose your preferences before starting</p>
      <div style={{ marginTop: "2.5rem" }}>
        <div className="preference-container">
          <label htmlFor="numberofgames">Number of games:</label>
          <input
            type="range"
            name="numberofgames"
            min="1"
            max="5"
            value={preference.numberofgames}
            onChange={(e) => {
              setPreference((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            id=""
          />
          <span style={{ position: "absolute", right: '-2rem' }}>
            {preference.numberofgames}
          </span>
        </div>
        <div className="preference-container">
          <label htmlFor="timepergame">Time per game:</label>
          <input
            type="range"
            name="timepergame"
            min="10"
            max="120"
            step="10"
            value={preference.timepergame}
            onChange={(e) => {
              setPreference((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            id=""
          />
          <span style={{ position: "absolute", right: '-2rem' }}>
            {preference.timepergame}s
          </span>
        </div>
      </div>
      <button style={{marginTop:'4rem',fontSize:'1.1rem',color:'white'}}>Play</button>
    </div>
  );
};

export default Play;
