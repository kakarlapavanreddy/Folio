import "./About.css";
import aboutImage from "../../assets/images/about.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>

          <h2>We Create Creative Digital Experiences</h2>

          <p className="about-description">
            Our team designs and develops websites and web applications that
            help businesses grow online.
          </p>

          <div className="about-cards">
            <div className="card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>

            <div className="card">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="card">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="about-image" data-aos="zoom-in"></div>

          <div className="about-content" data-aos="fade-up"></div>

          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
