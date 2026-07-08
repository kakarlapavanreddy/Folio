import { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../context/ThemeContext";

import { HiOutlineMenuAlt3, HiOutlineX, HiMoon, HiSun } from "react-icons/hi";

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "jobs", label: "Jobs", badge: "2" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={sticky ? "navbar sticky" : "navbar"}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="/" className="logo">
          folio<span>.</span>
        </a>

        {/* Navigation Links */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
              {item.label}

              {item.badge && <span className="badge">{item.badge}</span>}
            </a>
          ))}
        </nav>

        {/* Right Side Contact Button */}
        <a href="#contact" className="contact-btn desktop-btn">
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <HiSun /> : <HiMoon />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
