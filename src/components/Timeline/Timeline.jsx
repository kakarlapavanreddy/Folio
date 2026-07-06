import "./Timeline.css";

const timelineData = [
  {
    year: "2022",
    title: "Agency Started",
    description:
      "We started our creative journey by helping startups build beautiful digital products.",
  },
  {
    year: "2023",
    title: "100+ Projects",
    description:
      "Successfully delivered web applications, UI designs and branding solutions.",
  },
  {
    year: "2024",
    title: "Global Clients",
    description:
      "Expanded our services internationally with clients across multiple industries.",
  },
  {
    year: "2025",
    title: "Creative Innovation",
    description:
      "Focused on AI-powered experiences and scalable frontend applications.",
  },
];

function Timeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <span className="subtitle">OUR JOURNEY</span>

        <h2>
          Building Digital <br />
          Experiences Since 2022
        </h2>

        <p>
          Every milestone represents our passion for creating modern,
          responsive, and user-friendly digital products.
        </p>
      </div>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-circle"></div>

            <div className="timeline-card">
              <h3>{item.year}</h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
