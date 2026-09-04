import heroImage from "../assets/hero-image.png";
import "../styles/hero.css";

function Hero() {
  const scrollToHowItWorks = (event) => {
    event.preventDefault();

    const section = document.getElementById("how-it-works");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="badge-container">
            <span className="small-title">
              <svg
                className="sparkle-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
              </svg>

              FIND YOUR PATH
            </span>
          </div>

          <h1 className="hero-heading">
            Discover a career that{" "}
            <span className="highlight-blue">
              fits your future.
            </span>
          </h1>

          <p className="hero-subtext">
            Explore careers, discover the skills you need, and get
            personalized guidance to help you make confident decisions
            about your future.
          </p>

          <div className="hero-buttons">

            {/* START ASSESSMENT */}
            <a
              href="/assessment"
              className="primary-button"
            >
              Start Assessment

              <span className="arrow">
                →
              </span>
            </a>


            {/* HOW IT WORKS */}
            <a
              href="#how-it-works"
              className="secondary-button"
              onClick={scrollToHowItWorks}
            >
              <span className="play-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              How it works
            </a>

          </div>


          {/* TRUST POINTS */}
          <div className="trust-points">

            <div className="trust-item">
              <span className="check-icon">
                ✓
              </span>

              Personalized guidance
            </div>

            <div className="trust-item">
              <span className="user-icon">
                ◉
              </span>

              Explore careers
            </div>

            <div className="trust-item">
              <span className="star-icon">
                ★
              </span>

              Make confident choices
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="hero-image-wrapper">

          <img
            src={heroImage}
            alt="Career guidance"
            className="hero-img"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;