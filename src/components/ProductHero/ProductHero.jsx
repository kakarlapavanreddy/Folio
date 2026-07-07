import "./ProductHero.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const heroImage =
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg";

function ProductHero() {
  return (
    <section className="product-hero">
      <div className="container hero-wrapper">
        {/* Left Content */}

        <motion.div
          className="product-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">Featured Product</span>

          <h1>Bento.</h1>

          <h2>
            Drag & Drop
            <br />
            3D Visual Design System.
          </h2>

          <p>
            Global Digital Agency of Record.
            <br />5 Years of Digital Marketing Excellence.
          </p>

          <button>
            View Product
            <HiArrowRight />
          </button>
        </motion.div>

        {/* Right */}

        <motion.div
          className="product-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-bg"></div>

          <img src={heroImage} alt="Bento" />
        </motion.div>
      </div>
    </section>
  );
}

export default ProductHero;
