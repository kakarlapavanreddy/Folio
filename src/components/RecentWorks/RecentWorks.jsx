import "./RecentWorks.css";
import recentWorks from "../../data/recentWorksData";
import RecentWorkCard from "./RecentWorkCard";
import { motion } from "framer-motion";

function RecentWorks() {
  return (
    <section className="recent-works">
      <div className="container">
        <motion.div
          className="recent-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>04. You May Also Like</span>

          <h2>Recent Works</h2>

          <p>
            Agency is a full-service agency, busy designing and building
            beautiful digital products, brands and experiences.
          </p>
        </motion.div>

        <div className="recent-grid">
          {recentWorks.map((item) => (
            <RecentWorkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;
