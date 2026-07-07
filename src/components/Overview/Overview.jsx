import "./Overview.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FaCube, FaExpandArrowsAlt } from "react-icons/fa";

function Overview() {
  return (
    <section className="overview">
      <div className="container">
        <motion.div
          className="overview-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>01. Overview</span>

          <h2>
            The First Fully Editable,
            <br />
            3D Visual Design System.
          </h2>

          <p>
            Effortlessly combine different elements to create compelling
            compositions that help you tell a better story for landing pages,
            websites, portfolios, presentations and much more.
          </p>
        </motion.div>

        <div className="overview-grid">
          <motion.div className="overview-card" whileHover={{ y: -10 }}>
            <FaCube className="overview-icon" />

            <h3>Fully Editable</h3>

            <p>
              Edit every object, material, color and shadow directly inside
              Figma.
            </p>
          </motion.div>

          <motion.div className="overview-card" whileHover={{ y: -10 }}>
            <FaExpandArrowsAlt className="overview-icon" />

            <h3>High Resolution</h3>

            <p>
              Beautiful 3D assets suitable for websites, mobile apps,
              presentations and branding.
            </p>
          </motion.div>
        </div>

        <div className="download-buttons">
          <button className="primary-download">
            Download
            <HiArrowRight />
          </button>

          <button className="secondary-download">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Overview;
