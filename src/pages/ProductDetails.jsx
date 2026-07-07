import Navbar from "../components/Navbar/Navbar";
import ProductHero from "../components/ProductHero/ProductHero";
import Overview from "../components/Overview/Overview";
import Numbers from "../components/Numbers/Number";
import VisualIdentity from "../components/VisualIdentity/VisualIdentity";
import RecentWorks from "../components/RecentWorks/RecentWorks";
import DownloadCTA from "../components/DownloadCTA/DownloadCTA";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function ProductDetails() {
  return (
    <>
      <Navbar />

      <ProductHero />

      <Overview />

      <Numbers />

      <VisualIdentity />

      <RecentWorks />

      <DownloadCTA />

      <Contact />

      <Footer />
    </>
  );
}

export default ProductDetails;
