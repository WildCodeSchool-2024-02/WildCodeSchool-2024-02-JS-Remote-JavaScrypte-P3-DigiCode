import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchAuth from "../../utils/auth";
import logout from "../../utils/logout";
import "./NavBar.css";

export default function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let hasBeenChecked = false;
    if (!hasBeenChecked) {
      fetchAuth().then((response) => setUser(response));
      hasBeenChecked = true;
    }
  }, []);

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
          {user === null && (
            <li>
              <Link to="login">Login</Link> / <Link to="signup">Signup</Link>
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

      {user !== null && (
        <button type="button" onClick={() => logout()}>
          Logout
        </button>
      )}

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
