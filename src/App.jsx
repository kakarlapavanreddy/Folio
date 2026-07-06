import { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Timeline from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import Jobs from "./components/Jobs/Jobs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="main-layout">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="main-content">
          <Hero />

          <About />

          <Services />

          <Timeline />

          <Projects />

          <Jobs />

          <Contact />

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
