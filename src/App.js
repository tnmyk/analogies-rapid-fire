import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./components/play/Play";
import Game from "./components/game/Game";
import Finish from "./components/Finish";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
import { useEffect } from "react";
const App = () => {
  const getQuestion = () => {
    const url = "https://rapid-fire-server.herokuapp.com/";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        // setQuestion(result.question);
        console.log('loaded')
      });
  };
  useEffect(()=>{
    getQuestion();
  },[])
  return (
    <div className='main'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contribute" component={Contribute} />
          <Route exact path="/finish" component={Finish} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/start" component={Game} />
        </Switch>
      </Router>
      <footer>
        Made by{" "}
        <a
          className="portfolio-link"
          href="https://tanmay.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Tanmay Kachroo
        </a>
      </footer>
    </div>
  );
};

export default App;
