import "./Number.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

function Numbers() {
  return (
    <section className="numbers">
      <div className="container">
        <motion.div
          className="numbers-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>02. Folio Agency</span>

          <h2>By the Numbers.</h2>

          <p>
            Bento is the first fully editable 3D visual design system with
            global auto-updatable style guides built directly inside Figma.
          </p>
        </motion.div>

        <div className="numbers-grid">
          <motion.div className="number-card" whileHover={{ y: -10 }}>
            <h1>40+</h1>

            <h3>Scene Objects 🤩</h3>

            <p>
              Ready-to-use objects that help build professional landing pages.
            </p>
          </motion.div>

          <motion.div className="number-card active" whileHover={{ y: -10 }}>
            <h1>20+</h1>

            <h3>Pre-built Scenes 🔥</h3>

            <p>Beautiful ready-made scenes that can be customized easily.</p>
          </motion.div>
        </div>

        <div className="numbers-description">
          <div className="description-card">
            <h3>Auto-Updatable Style Guides</h3>

            <p>
              Keep every design synchronized with reusable components and design
              tokens.
            </p>
          </div>

          <div className="description-card">
            <h3>UI Elements</h3>

            <p>
              Hundreds of editable UI elements designed for modern products.
            </p>
          </div>
        </div>

        <div className="numbers-buttons">
          <button className="download-btn">
            Download
            <HiArrowRight />
          </button>

          <button className="outline-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
