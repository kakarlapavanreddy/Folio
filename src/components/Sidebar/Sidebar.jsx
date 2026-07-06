import "./Sidebar.css";
import {
  FaDesktop,
  FaMobileAlt,
  FaImages,
  FaLayerGroup,
  FaPalette,
  FaHistory,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <p className="sidebar-title">PAGES</p>

        <ul className="sidebar-menu">
          <li className="active">
            <FaDesktop />
            <span>Desktop</span>
          </li>

          <li>
            <FaMobileAlt />
            <span>Mobile</span>
          </li>

          <li>
            <FaImages />
            <span>Assets</span>
          </li>

          <li>
            <FaLayerGroup />
            <span>Extra</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">OTHER</p>

        <ul className="sidebar-menu">
          <li>
            <FaPalette />
            <span>Style Guide</span>
          </li>

          <li>
            <FaHistory />
            <span>Changelog</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-card">
        <h3>Need Help?</h3>

        <p>Build beautiful React websites with reusable components.</p>

        <button>Learn More</button>
      </div>

      <p className="copyright">© 2026 Folio Agency</p>
    </aside>
  );
}

export default Sidebar;
