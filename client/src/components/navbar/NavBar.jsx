import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import userLogout from "../../utils/logout";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  const toggleLogout = () => {
    userLogout()
      .then(() => setUser(null))
      .then(() => navigate("/"));
  };

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
          {user && user.role === "admin" && (
            <li>
              <Link to="/history9">Admin</Link>
            </li>
          )}
          {user && user.role === "user" && (
            <li>
              <Link to="/user">Profile</Link>
            </li>
          )}
          {user === null ? (
            <li>
              <Link to="login">Login</Link> / <Link to="signup">Signup</Link>
            </li>
          ) : (
            <li>
              <button type="button" onClick={toggleLogout} className="logout">
                Logout
              </button>
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
      <div>
        <Link to="/">
          <img
            className="logo"
            src="src/assets/images/origins-digital.svg"
            alt="logo"
          />
        </Link>
        {user && (
          <p className="helloText">
            Hello <strong>{user?.firstname}</strong>
          </p>
        )}
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  setUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};
