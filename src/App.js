import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./components/play/Play";
import Game from "./components/game/Game";
import Finish from "./components/Finish";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
const App = () => {
  return (
    <div style={{position:'relative',minHeight:'100vh',paddingBottom:'2rem'}}>
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
