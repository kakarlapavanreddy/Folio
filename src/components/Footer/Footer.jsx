import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top */}

        <div className="footer-top">
          <div className="footer-logo">
            <h2>folio.</h2>
            <p>
              Creating beautiful digital experiences for brands around the
              world.
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>

            <a href="#work">Work</a>

            <a href="#services">Services</a>

            <a href="#jobs">Jobs</a>
          </div>
        </div>

        {/* Divider */}

        <div className="footer-divider"></div>

        {/* Bottom */}

        <div className="footer-bottom">
          <p>© 2020 UI8 LLC. All Rights Reserved.</p>

          <div className="social-links">
            <span>Follow us</span>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
