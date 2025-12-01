
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/favourites" className="nav-link">Favorites</Link>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;