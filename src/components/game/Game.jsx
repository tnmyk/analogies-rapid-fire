import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../../css/game.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Game = () => {
  const history  = useHistory();
  // const { games, time } = useParams();
  const location = useLocation()
  const games = location.state.games
  const time = location.state.time
  const [currentGame, setCurrentGame] = useState(0);
  const [question, setQuestion] = useState("Get ready!");
  const [timer, setTimer] = useState(5);
  const [maxTime, setMaxTime] = useState(5);
  const [isBreak, setIsBreak] = useState(true);
  const getQuestion = () => {
    fetch("https://api.kanye.rest/")
      .then((res) => res.json())
      .then((result) => {
        setQuestion(result.quote);
      });
  };
  useEffect(()=>{
    if(currentGame==games){
      return history.push('/finish',{done:games})
    }
  },[currentGame])
  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => setTimer(prev - 1));
    }, 1000);
    getQuestion();
  }, []);
  useEffect(() => {
    if (timer < 0) {
      if (!isBreak) {
        setIsBreak(true);
        setTimer(5);
        setMaxTime(5);
        getQuestion();

        setCurrentGame(currentGame + 1);
        return;
      }
      setIsBreak(false);

      setTimer(time);
      setMaxTime(time);
    }
  }, [timer]);
  return (
    <div className="game">
      <h2>
        {currentGame}/{games}
      </h2>
      <div className="game-center">
        <div className="question">
          {isBreak
            ? currentGame === 0
              ? "Get ready!"
              : "Get ready for next one!"
            : question}
        </div>
        <div className="timer-container">
          <CircularProgressbar
            value={100 - (timer / maxTime) * 100}
            text={timer ? timer : "0"}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
