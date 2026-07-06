import "./Sidebar.css";
import { useEffect, useState } from "react";

import {
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt,
  FaCube,
  FaLayerGroup,
  FaPalette,
  FaHistory,
  FaTimes,
} from "react-icons/fa";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [device, setDevice] = useState("Desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDevice("Mobile");
      } else if (width < 1024) {
        setDevice("Tablet");
      } else {
        setDevice("Desktop");
      }
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <>
      <div
        className={`overlay ${sidebarOpen ? "show-overlay" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside className={`sidebar ${sidebarOpen ? "show-sidebar" : ""}`}>
        <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
          <FaTimes />
        </button>

        <div className="sidebar-content">
          <h2 className="logo">folio.</h2>

          <p className="heading">PAGES</p>

          <ul>
            <li className={device === "Desktop" ? "active" : ""}>
              <FaDesktop />
              Desktop
            </li>

            <li className={device === "Tablet" ? "active" : ""}>
              <FaTabletAlt />
              Tablet
            </li>

            <li className={device === "Mobile" ? "active" : ""}>
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

          <p className="heading">OTHER</p>

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

            <p>Automatically detects Desktop, Tablet and Mobile.</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
