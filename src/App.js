import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./components/play/Play";
import Game from "./components/game/Game";
import Finish from "./components/Finish";
import Home from "./components/Home";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/finish" component={Finish} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/start" component={Game} />
        </Switch>
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
      </Router>
    </div>
  );
};

export default App;
