import "./Sidebar.css";

import {
  FaDesktop,
  FaMobileAlt,
  FaTabletAlt,
  FaCube,
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
        className={`overlay ${sidebarOpen ? "show-overlay" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside className={`sidebar ${sidebarOpen ? "show-sidebar" : ""}`}>
        {/* Close Button */}

        <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
          <FaTimes />
        </button>

        <div className="sidebar-content">
          <h5>PAGES</h5>

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
              <FaCube />
              Assets
            </li>

            <li>
              <FaLayerGroup />
              Extra
            </li>
          </ul>

          <h5>OTHER</h5>

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

          <div className="promotion">
            <h3>Agency UI Kit</h3>

            <p>Beautiful components for React & Figma inspired projects.</p>

            <button>Learn More</button>
          </div>

          <div className="copyright">© 2026 Folio Agency</div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
