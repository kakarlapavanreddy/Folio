import "./Jobs.css";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
    experience: "1-3 Years",
  },
  {
    id: 2,
    title: "UI / UX Designer",
    type: "Full Time",
    location: "Hyderabad",
    experience: "2+ Years",
  },
  {
    id: 3,
    title: "React Developer Intern",
    type: "Internship",
    location: "Bangalore",
    experience: "Fresher",
  },
];

function Jobs() {
  return (
    <section id="jobs" className="jobs">
      <div className="section-heading">
        <p>CAREERS</p>

        <h2>Open Positions</h2>

        <span>
          Join our talented team and create modern digital experiences with us.
        </span>
      </div>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>

            <div className="job-details">
              <span>
                <FaBriefcase /> {job.type}
              </span>

              <span>
                <FaMapMarkerAlt /> {job.location}
              </span>
            </div>

            <p className="exp">Experience : {job.experience}</p>

            <p>
              We are looking for passionate developers who enjoy creating
              beautiful web applications using modern technologies.
            </p>

            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Jobs;
