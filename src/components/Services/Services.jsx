import "./Services.css";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Creating digital strategies that help brands grow and connect with customers.",
    active: false,
  },
  {
    number: "02",
    title: "Branding",
    description:
      "Building memorable brands with modern visual identity and storytelling.",
    active: true,
  },
  {
    number: "03",
    title: "Interactive",
    description:
      "Designing engaging digital experiences for web and mobile products.",
    active: false,
  },
  {
    number: "04",
    title: "Communicate",
    description:
      "Helping businesses communicate clearly through impactful design.",
    active: false,
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>02. What We Do</p>

          <h2>
            We Make Designs that
            <br />
            Lead and Inspire.
          </h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
