import { Link, useHistory, useLocation } from "react-router-dom";
import {RiArrowGoBackFill} from 'react-icons/ri'
const Finish = () => {
  const location = useLocation();

  const history = useHistory();
  if (!location.state) history.push("/");
  else {
    var done = location.state.done;
  }
  return (
    <>
      <div className="finish">
        {done && (
          <h1>
            Goodjob! You completed {done === 1 ? "1 game" : done + " games"}!{" "}
          </h1>
        )}
        <div style={{ marginTop: "0.5rem" }}>
          Remember, practice makes perfect!
        </div>
        <img draggable="false" src="/images/finish.svg" alt="" width="35%" />
        <Link to='/play'>
          <button
            style={{
              fontSize: "1.05rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            Play again <RiArrowGoBackFill style={{ marginLeft: "0.3rem" }} />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Finish;
