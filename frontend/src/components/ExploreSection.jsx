import "../styles/explore.css";

function ExploreSection() {
  return (
    <section className="explore-section">

      {/* HEADING */}
      <div className="explore-top">

        <div className="explore-title">
          <span>EXPLORE</span>
          <h2>Start anywhere</h2>
        </div>

      </div>


      {/* CARDS */}
      <div className="explore-list">

        {/* EXPLORE CAREERS */}
        <a href="/careers" className="explore-card">

          <div className="explore-icon career-icon">
            💼
          </div>

          <span className="explore-card-title">
            Explore Careers
          </span>

          <span className="explore-arrow">
            →
          </span>

        </a>


        {/* JOBS DETAILS */}
        <a href="/jobs" className="explore-card">

          <div className="explore-icon roadmap-icon">
            💼
          </div>

          <span className="explore-card-title">
            Jobs Details
          </span>

          <span className="explore-arrow">
            →
          </span>

        </a>


        {/* ABOUT */}
        <a href="/about" className="explore-card">

          <div className="explore-icon job-icon">
            ℹ️
          </div>

          <span className="explore-card-title">
            About
          </span>

          <span className="explore-arrow">
            →
          </span>

        </a>

      </div>

    </section>
  );
}

export default ExploreSection;