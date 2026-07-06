import "./Sidebar.css";
import { useEffect, useState } from "react";

function Sidebar() {
  const [device, setDevice] = useState("Desktop");

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDevice("Mobile");
      } else if (width < 1024) {
        setDevice("Tablet");
      } else {
        setDevice("Desktop");
      }
    };

    updateDevice();

    window.addEventListener("resize", updateDevice);

    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return (
    <aside className="sidebar">
      <h1 className="logo">folio.</h1>

      <p className="menu-title">PAGES</p>

      <ul className="sidebar-menu">
        <li className={device === "Desktop" ? "active" : ""}>Desktop</li>

        <li className={device === "Tablet" ? "active" : ""}>Tablet</li>

        <li className={device === "Mobile" ? "active" : ""}>Mobile</li>

        <li>Assets</li>

        <li>Extra</li>
      </ul>

      <p className="menu-title">OTHER</p>

      <ul className="sidebar-menu">
        <li>Style Guide</li>

        <li>Changelog</li>
      </ul>

      <div className="promo-card">
        <h3>Agency UI Kit</h3>
        <p>Create beautiful websites faster.</p>
      </div>

      <p className="copyright">© 2026</p>
    </aside>
  );
}

export default Sidebar;
