import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="intro-flex">
        <div className="intro-text">
          <h1 className="intro-heading">Improve your speaking skills</h1>
          <div className="intro-sub">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            sunt harum asperiores, alias assumenda voluptatem nihil a aliquam
            ipsa delectus.
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
