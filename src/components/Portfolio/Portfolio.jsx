import "./Portfolio.css";
import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import portfolioData from "../../data/portfolioData";
import { HiArrowRight } from "react-icons/hi";

function Portfolio() {
  return (
    <section id="work" className="portfolio">
      <div className="container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="portfolio-header-left">
            <p>04. Famous Projects</p>
            <h2>Our Partnerships</h2>
          </div>

          <button className="contact-btn">
            Contact Us
            <HiArrowRight />
          </button>
        </motion.div>

        <div className="portfolio-list">
          {portfolioData.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              align={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
