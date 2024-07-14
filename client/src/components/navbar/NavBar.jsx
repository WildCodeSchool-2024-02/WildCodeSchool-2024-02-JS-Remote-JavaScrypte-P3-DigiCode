import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavBar.css";

export default function NavBar({ user = null }) {
  return (
    <nav className="navbar-container">
      <button
        className="menu-button"
        type="button"
        popovertarget="navlinks"
        popovertargetaction="toggle"
      >
        Menu
      </button>
      <div id="navlinks" popover="auto">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          {user === null ? (
            <li>
              <Link to="login">Login</Link> / <Link to="signup">Signup</Link>
            </li>
          ) : (
            <li>
              <Link to="logout">Logout</Link>
            </li>
          )}
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="about">About us</Link>
          </li>
        </ul>
      </div>
      <Link to="/">
        <img
          className="logo"
          src="src/assets/images/origins-digital.svg"
          alt="logo"
        />
      </Link>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};
