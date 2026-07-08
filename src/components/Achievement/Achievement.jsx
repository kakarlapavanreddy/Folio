import "./Achievement.css";
import { motion } from "framer-motion";

const achievementImage =
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg";

function Achievement() {
  return (
    <section id="achievement" className="achievement">
      <div className="container achievement-container">
        {/* LEFT IMAGE */}

        <motion.div
          className="achievement-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="pink-circle"></div>

          <div className="achievement-image-box">
            <img src={achievementImage} alt="Achievement" />
          </div>

          <div className="floating-card top-card"></div>
          <div className="floating-card bottom-card"></div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="achievement-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">03. Achievement</span>

          <h2>
            A design team building a curated marketplace for UI designers.
          </h2>

          <div className="achievement-stats">
            <div className="achievement-number">68</div>

            <div className="achievement-info">
              <span className="emoji">😎</span>
              <span>Successful Projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievement;
