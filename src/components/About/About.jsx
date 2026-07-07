import "./About.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const aboutImage =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-number">01. Who We Are</p>

          <h2>
            We Make Designs that
            <br />
            Lead and Inspire.
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-years"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span>2017</span>
            <span>2018</span>
            <span>2019</span>

            <span className="active">2020</span>

            <span>2021</span>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="purple-box"></div>

            <img src={aboutImage} alt="About" />
          </motion.div>
        </div>

        <motion.div
          className="about-bottom"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-text">
            <h3>
              A design team building a curated marketplace for UI designers.
            </h3>

            <p>
              4,404 curated design resources to energize your creative workflow.
              We're a growing family of designers and makers from around the
              world.
            </p>

            <button>
              Contact Us
              <HiArrowRight />
            </button>
          </div>

          <div className="about-stat">
            <h1>28</h1>

            <p>Biggest Branding</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
