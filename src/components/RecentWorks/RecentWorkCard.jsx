import "./RecentWorks.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function RecentWorkCard({ item }) {
  return (
    <motion.div
      className="recent-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
    >
      <div className="recent-image">
        <img src={item.image} alt={item.name} />

        <div className="recent-overlay">
          <Link to="/product" className="recent-btn">
            View
            <HiArrowRight />
          </Link>
        </div>
      </div>

      <div className="recent-content">
        <span>{item.title}</span>

        <h3>{item.name}</h3>

        <p>{item.description}</p>
      </div>
    </motion.div>
  );
}

export default RecentWorkCard;
