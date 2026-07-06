import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Jobs from "./components/Jobs/Jobs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="content">
          <Hero />

          <About />

          <Timeline />

          <Services />

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
