import "./VisualIdentity.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const visualImage =
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80";

function VisualIdentity() {
  return (
    <section className="visual-identity">
      <div className="container">
        <motion.div
          className="visual-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>03. Visual Identity</span>

          <h2>
            Evolving the
            <br />
            Look & Feel.
          </h2>
        </motion.div>

        <div className="visual-content">
          <motion.div
            className="visual-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={visualImage} alt="Visual Identity" />
          </motion.div>

          <motion.div
            className="visual-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stat-box">
              <h1>80+</h1>
              <h3>UI Elements</h3>
            </div>

            <div className="content-box">
              <h3>Auto-Updatable Global Style Guide</h3>

              <p>
                Agency is a full-service agency, busy designing and building
                beautiful digital products, brands and experiences.
              </p>
            </div>

            <div className="content-box">
              <h3>Endless Possibilities</h3>

              <p>The number of applications and use cases is nearly endless.</p>
            </div>

            <button>
              Contact Us
              <HiArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VisualIdentity;
