import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar-container">
      <button
        type="button"
        popovertarget="navlinks"
        popovertargetaction="toggle"
      >
        Menu
      </button>
      <div id="navlinks" popover="true">
        <ul>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="login">Login</Link> / <Link to="signup">Signup</Link>
          </li>
          {/* Une fois l'utilisateur authentifié, changer "login/signup" par "my account" */}
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="about">About us</Link>
          </li>
        </ul>
      </div>
      <h1>
        <Link to="/">Origins Digital</Link>
      </h1>
    </nav>
  );
}
