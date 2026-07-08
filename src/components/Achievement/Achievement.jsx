import "./Achievement.css";

function Achievement() {
  return (
    <section className="achievement" id="achievement">
      <div className="container achievement-wrapper">
        {/* Left */}

        <div className="achievement-left">
          <div className="phone-wrapper">
            <div className="pink-circle"></div>

            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700"
              alt="Phone"
              className="phone-image"
            />
          </div>
        </div>

        {/* Right */}

        <div className="achievement-right">
          <span className="section-no">03.</span>

          <h2>Achievement</h2>

          <p>A design team building a curated marketplace for UI designers.</p>

          <div className="project-box">
            <h1>68</h1>

            <div className="project-text">
              <span className="emoji">😎</span>
              <span>Successful Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
