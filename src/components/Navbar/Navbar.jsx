import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>
          folio<span>.</span>
        </h1>
      </div>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Work</a>
        <a href="#jobs">Jobs</a>
      </nav>

      <button className="contact-btn">Contact Us</button>
    </header>
  );
}

export default Navbar;
