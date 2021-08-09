import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../../css/game.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Game = () => {
  const history = useHistory();
  const location = useLocation();
  const [interval, setInter] = useState();
  if (location.state) {
    var games = location.state.games;
    var time = location.state.time;
  } else history.push("/play");

  const [currentGame, setCurrentGame] = useState(0);
  const [question, setQuestion] = useState("Get ready!");
  const [timer, setTimer] = useState(5);
  const [maxTime, setMaxTime] = useState(5);
  const [isBreak, setIsBreak] = useState(true);
  const getQuestion = () => {
    // const url = "https://rapid-fire-server.herokuapp.com/";
    const url = "http://localhost:8000/";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setQuestion(result.question);
      });
  };

  useEffect(() => {
    if (currentGame === Number(games)) {
      clearInterval(interval);
      return history.push("/finish", { done: games });
    }
    // eslint-disable-next-line
  }, [currentGame]);
  useEffect(() => {
    setInter(
      setInterval(() => {
        setTimer((prev) => setTimer(prev - 1));
      }, 1000)
    );
    getQuestion();
    // return () => {
    //   clearInterval(interval);
    // };
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
    // eslint-disable-next-line
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
