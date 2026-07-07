import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Achievement from "../components/Achievement/Achievement";
import Portfolio from "../components/Portfolio/Portfolio";
import Hiring from "../components/Hiring/Hiring";
import Jobs from "../components/Jobs/Jobs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollTop from "../components/ScrollTop/ScrollTop";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Achievement />
      <Portfolio />
      <Hiring />
      <Jobs />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default Home;
