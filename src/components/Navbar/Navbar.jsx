import "./Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar({ setSidebarOpen }) {
  return (
    <header className="navbar">
      {/* Left */}

      <div className="navbar-left">
        <div className="logo">
          <span className="logo-dot"></span>

          <h2>folio.</h2>
        </div>
      </div>

      {/* Center */}

      <nav className="navbar-menu">
        <a href="#about">About</a>

        <a href="#services">Services</a>

        <a href="#projects">Projects</a>

        <a href="#jobs">Jobs</a>

        <a href="#contact">Contact</a>
      </nav>

      {/* Right */}

      <div className="navbar-right">
        <button className="contact-btn">Contact Us</button>

        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
