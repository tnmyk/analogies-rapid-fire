import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./components/play/Play";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/play" component={Play} />
          <Route exact path="/play/*" component={} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
