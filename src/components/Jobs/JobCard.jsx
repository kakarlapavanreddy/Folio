import "./Jobs.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

function JobCard({ job }) {
  return (
    <motion.div
      className={job.active ? "job-card active" : "job-card"}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="job-top">
        <h3>{job.title}</h3>

        <span className="job-badge">{job.openings}</span>
      </div>

      <p>{job.experience}</p>

      <button>
        Apply Now
        <HiArrowRight />
      </button>
    </motion.div>
  );
}

export default JobCard;
