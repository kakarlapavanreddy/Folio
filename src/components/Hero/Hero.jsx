import "./Hero.css";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const heroImage =
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-circle circle-one"></div>
      <div className="hero-circle circle-two"></div>

      <div className="container hero-container">
        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-subtitle">Creative Digital Agency</p>

          <h1>
            Stand Out
            <br />
            from The
            <br />
            Crowd.
          </h1>

          <p className="hero-text">
            Agency is a full-service agency, busy designing and building
            beautiful digital products, brands and experiences.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Recent Work</button>
          </div>

          <div className="scroll-box">
            <div className="scroll-icon">
              <FaArrowDown />
            </div>

            <span>Scroll Down</span>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="purple-card"></div>

          <img src={heroImage} alt="Hero" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
