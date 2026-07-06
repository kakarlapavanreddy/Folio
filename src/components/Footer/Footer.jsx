import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Company Information */}
        <div className="footer-column">
          <h2 className="footer-logo">Folio Agency</h2>

          <p>
            We build modern, responsive and creative digital experiences for
            startups and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#portfolio">Portfolio</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h3>Contact</h3>

          <p>📍 Hyderabad, India</p>

          <p>📧 contact@folioagency.com</p>

          <p>📞 +91 9876543210</p>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>

          <p>Subscribe for latest updates.</p>

          <form className="newsletter">
            <input type="email" placeholder="Enter Email" />

            <button type="submit">Subscribe</button>
          </form>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        <footer data-aos="fade-up"></footer>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Folio Agency. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
