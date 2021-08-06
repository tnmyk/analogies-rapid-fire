import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
      <nav>
        <div className="logo">Rapid Fire</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to='/play'>
            <button>Play Now</button>
          </Link>
        </div>
      </nav>
    );
}
 
export default Navbar;<div>
</div>