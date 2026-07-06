import "./Sidebar.css";
import {
  FaDesktop,
  FaMobileAlt,
  FaTabletAlt,
  FaImages,
  FaLayerGroup,
  FaPalette,
  FaHistory,
  FaTimes,
} from "react-icons/fa";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Overlay */}

      <div
        className={`sidebar-overlay ${sidebarOpen ? "show-overlay" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside className={`sidebar ${sidebarOpen ? "show-sidebar" : ""}`}>
        {/* Close Button */}

        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          <FaTimes />
        </button>

        {/* Logo */}

        <div className="sidebar-logo">
          <span className="logo-dot"></span>

          <h2>folio.</h2>
        </div>

        {/* Pages */}

        <div className="sidebar-section">
          <p className="sidebar-title">PAGES</p>

          <ul>
            <li className="active">
              <FaDesktop />
              Desktop
            </li>

            <li>
              <FaTabletAlt />
              Tablet
            </li>

            <li>
              <FaMobileAlt />
              Mobile
            </li>

            <li>
              <FaImages />
              Assets
            </li>

            <li>
              <FaLayerGroup />
              Extra
            </li>
          </ul>
        </div>

        {/* Other */}

        <div className="sidebar-section">
          <p className="sidebar-title">OTHER</p>

          <ul>
            <li>
              <FaPalette />
              Style Guide
            </li>

            <li>
              <FaHistory />
              Changelog
            </li>
          </ul>
        </div>

        {/* Card */}

        <div className="promo-card">
          <h3>Agency UI Kit</h3>

          <p>Build beautiful websites faster using modern UI components.</p>

          <button>Explore</button>
        </div>

        <p className="copyright">© 2026 Folio Agency</p>
      </aside>
    </>
  );
}

export default Sidebar;
