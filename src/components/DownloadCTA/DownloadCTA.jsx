import "./DownloadCTA.css";
import { HiArrowRight } from "react-icons/hi";

function DownloadCTA() {
  return (
    <section className="download-section">
      <div className="container">
        <div className="download-box">
          <span>04. Call To Action</span>

          <h2>
            Auto-Updatable
            <br />
            Global Style Guide
          </h2>

          <p>
            Bento is the first fully editable 3D visual design system built
            inside Figma with reusable components, global styles, and beautiful
            scene objects.
          </p>

          <a href="#" className="download-btn-large">
            Download Now
            <HiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default DownloadCTA;
