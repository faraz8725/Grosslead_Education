import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/jobChoice.css";

function JobChoice() {
  const navigate = useNavigate();

  return (
    <div className="job-choice-page">
      <Navbar />

      {/* HERO */}
      <section className="job-choice-hero">
        <div className="job-choice-hero-content">
          <span className="job-choice-badge">
            JOB OPPORTUNITIES
          </span>

          <h1>
            Find the Right <span>Job Path</span>
          </h1>

          <p>
            Explore private and government job opportunities,
            understand the requirements and choose the path
            that matches your career goals.
          </p>
        </div>
      </section>

      {/* JOB OPTIONS */}
      <section className="job-choice-section">
        <div className="job-choice-heading">
          <span>CHOOSE YOUR PATH</span>

          <h2>
            What type of job are you looking for?
          </h2>

          <p>
            Select an option below to explore job opportunities,
            requirements and career information.
          </p>
        </div>

        <div className="job-choice-grid">

          {/* PRIVATE JOB */}
          <div
            className="job-choice-card private-card"
            onClick={() => navigate("/jobs/private")}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                navigate("/jobs/private");
              }
            }}
          >
            <div className="job-choice-icon">
              💼
            </div>

            <span className="job-choice-label">
              PRIVATE SECTOR
            </span>

            <h3>
              Private Jobs
            </h3>

            <p>
              Explore private-sector career opportunities,
              salary ranges, required skills and technologies
              for popular jobs.
            </p>

            <div className="job-choice-button">
              Explore Private Jobs
              <span>→</span>
            </div>
          </div>

          {/* GOVERNMENT JOB */}
          <div
            className="job-choice-card government-card"
            onClick={() => navigate("/jobs/government")}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                navigate("/jobs/government");
              }
            }}
          >
            <div className="job-choice-icon">
              🏛️
            </div>

            <span className="job-choice-label">
              PUBLIC SECTOR
            </span>

            <h3>
              Government Jobs
            </h3>

            <p>
              Explore government career paths, eligibility,
              exams, qualifications and important requirements
              for different government jobs.
            </p>

            <div className="job-choice-button">
              Explore Government Jobs
              <span>→</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="job-choice-cta">
        <div>
          <span>NOT SURE?</span>

          <h2>
            Let your interests guide you.
          </h2>

          <p>
            Take our career assessment and discover career
            options that match your interests and skills.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/assessment")}
        >
          Take Assessment →
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default JobChoice;