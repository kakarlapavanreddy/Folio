import "./CTA.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="circle one"></div>
          <div className="circle two"></div>
          <div className="circle three"></div>

          <div className="cta-content">
            <p>05. Call To Action</p>

            <h2>
              We Are Looking
              <br />
              for Talented
              <br />
              Designers
            </h2>

            <button>
              Apply Now
              <HiArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
