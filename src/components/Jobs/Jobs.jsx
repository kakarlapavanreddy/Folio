import "./Jobs.css";
import { motion } from "framer-motion";
import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "Graphic Designer",
    openings: 2,
    experience: "2 Years Experience",
    active: true,
  },

  {
    id: 2,
    title: "Visual Designer",
    openings: 1,
    experience: "2 Years Experience",
    active: false,
  },

  {
    id: 3,
    title: "Art Director",
    openings: 1,
    experience: "2 Years Experience",
    active: false,
  },

  {
    id: 4,
    title: "Web Designer",
    openings: 6,
    experience: "2 Years Experience",
    active: false,
  },
];

function Jobs() {
  return (
    <section id="jobs" className="jobs">
      <div className="container">
        <motion.div
          className="jobs-header"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <p>05. We Are Hiring</p>

          <h2>Available Jobs</h2>
        </motion.div>

        <div className="jobs-grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
