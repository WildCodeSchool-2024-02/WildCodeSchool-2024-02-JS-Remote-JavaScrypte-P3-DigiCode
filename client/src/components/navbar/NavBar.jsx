import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {

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
          <li>
            <Link to="login">Login</Link> / <Link to="signup">Signup</Link>
          </li>
          <li>
            <Link to="logout">Logout</Link>
          </li>
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
