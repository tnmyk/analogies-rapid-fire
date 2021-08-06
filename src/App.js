import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./components/play/Play";
import Game from "./components/game/Game";
import Finish from "./components/Finish";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/finish" component={Finish}/>
          <Route exact path="/play" component={Play} />
          <Route exact path="/start" component={Game} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
