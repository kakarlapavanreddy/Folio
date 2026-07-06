import "./Hero.css";

import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="small-text">Creative Digital Agency</p>

        <h1>
          Stand Out <br />
          from The <br />
          Crowd.
        </h1>

        <p>
          Agency is a full-service agency that creates beautiful digital
          products, brands and experiences.
        </p>

        <button>Recent Work</button>

        <div className="scroll">↓ Scroll Down</div>
      </div>

      <div className="hero-right">
        <div className="purple-box">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
