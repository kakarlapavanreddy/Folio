import "./Achievement.css";
import { motion } from "framer-motion";
import { FaSmileBeam } from "react-icons/fa";

function Achievement() {
  return (
    <section id="achievement" className="achievement">
      <div className="container">
        <motion.div
          className="achievement-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>03. Achievement</p>

          <h2>
            A design team building a curated marketplace for UI designers.
          </h2>
        </motion.div>

        <div className="achievement-content">
          <motion.div
            className="achievement-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="circle">
              <h1>68</h1>
            </div>

            <div className="project-text">
              <FaSmileBeam className="emoji" />
              <h3>Successful Projects</h3>
            </div>
          </motion.div>

          <motion.div
            className="achievement-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stat-card">
              <h2>120+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="stat-card">
              <h2>50+</h2>
              <p>Team Members</p>
            </div>

            <div className="stat-card">
              <h2>10+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h2>24/7</h2>
              <p>Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
