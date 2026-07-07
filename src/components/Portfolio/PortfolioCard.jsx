import "./Portfolio.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

function PortfolioCard({ item }) {
  return (
    <motion.div
      className={`portfolio-card ${item.id % 2 === 0 ? "right" : "left"}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Title First */}
      <div className="portfolio-content">
        <span>{item.title}</span>
      </div>

      {/* Image Second */}
      <img src={item.image} alt={item.name} className="portfolio-img" />

      {/* Text Third */}
      <div className="portfolio-content">
        <h2>{item.name}</h2>

        <p>{item.description}</p>

        {/* Button Last */}
        <button>
          View <HiArrowRight />
        </button>
      </div>
    </motion.div>
  );
}

export default PortfolioCard;
