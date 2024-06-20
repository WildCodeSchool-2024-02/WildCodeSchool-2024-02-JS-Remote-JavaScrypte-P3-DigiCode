import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <p>footer</p>
      <Link to="/rgpd">RGPD</Link>
    </footer>
  );
}
