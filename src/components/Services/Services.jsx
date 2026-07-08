import "./Services.css";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const services = [
  {
    title: "Strategy",
    image: "https://cdn.jsdelivr.net/npm/lucide-static/icons/target.svg",
    active: false,
  },
  {
    title: "Branding",
    image: "https://cdn.jsdelivr.net/npm/lucide-static/icons/palette.svg",
    active: true,
  },
  {
    title: "Interactive",
    image: "https://cdn.jsdelivr.net/npm/lucide-static/icons/monitor.svg",
    active: false,
  },
  {
    title: "Communicate",
    image:
      "https://cdn.jsdelivr.net/npm/lucide-static/icons/messages-square.svg",
    active: false,
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>02. What We Do</p>

          <div className="services-title-row">
            <h2>
              We Make Designs that
              <br />
              Lead and Inspire.
            </h2>

            <div className="services-arrows">
              <button className="arrow-btn">
                <HiArrowLeft />
              </button>

              <button className="arrow-btn active">
                <HiArrowRight />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
