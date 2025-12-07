
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();

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
        <li>
          <button onClick={toggleTheme} className="theme-btn">
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;