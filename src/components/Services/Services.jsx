import "./Services.css";
import { motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ServiceCard from "./ServiceCard";
import servicesData from "../../data/servicesData";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-number">02. What We Do</span>

          <h2>
            We Make Designs that
            <br />
            Lead and Inspire.
          </h2>

          <div className="services-arrows">
            <button className="arrow-btn">
              <HiArrowLeft />
            </button>

            <button className="arrow-btn active-arrow">
              <HiArrowRight />
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
