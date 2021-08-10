import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="intro-flex">
        <div className="intro-text">
          <h1 className="intro-heading">Improve your speaking skills</h1>
          <div className="intro-sub">
            Improve your speaking skills with gamified experience.
            Make learning easier.
          </div>
          <Link to="/play">
            <button style={{ marginTop: "3rem", fontSize: "1.1rem" }}>
              Play now
            </button>
          </Link>
        </div>
        <div className="intro-image">
          <img src="/images/intro.svg" alt="" width="90%" />
        </div>
      </div>
    </div>
  );
};

export default Home;
