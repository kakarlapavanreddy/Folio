import { motion } from "framer-motion";
import "./Services.css";

function ServiceCard({ number, title, description, active }) {
  return (
    <motion.div
      className={active ? "service-card active" : "service-card"}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
    >
      <span className="service-number">{number}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>Learn More →</button>
    </motion.div>
  );
}

export default ServiceCard;
