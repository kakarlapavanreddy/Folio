import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "Business Website",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    category: "React Development",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Travel Dashboard",
    category: "UI / UX Design",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Restaurant Website",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Finance Dashboard",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <p>OUR PROJECTS</p>

        <h2>Featured Work</h2>

        <span>
          We build modern websites and digital experiences for startups,
          businesses and brands.
        </span>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
