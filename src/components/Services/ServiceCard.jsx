import "./Services.css";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  return (
    <motion.div
      className={`service-card ${service.active ? "active" : ""}`}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="service-icon">
        <img src={service.icon} alt={service.title} />
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>
    </motion.div>
  );
}

export default ServiceCard;
