import "./Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar({ setSidebarOpen }) {
  return (
    <header className="navbar">
      {/* Mobile Menu */}

      <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
        <FaBars />
      </button>

      {/* Logo */}

      <div className="logo">
        <span className="dot"></span>
        folio.
      </div>

      {/* Navigation */}

      <nav className="nav-links">
        <a href="#about">About</a>

        <a href="#projects">Work</a>

        <a href="#services">Services</a>

        <a href="#jobs">Jobs</a>

        <a href="#contact">Contact</a>
      </nav>

      {/* Button */}

      <button className="contact-btn">Contact Us</button>
    </header>
  );
}

export default Navbar;
