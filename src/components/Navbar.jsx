import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" style={{display:'flex'}}>
        <img src="/images/logo.svg" alt="" />
        <div className="logo">Rapid Fire</div>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/play">
          <button>Play Now</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
<div></div>;
