import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/governmentJobs.css";

// const API_URL = "http://localhost:5000";
const API_URL = import.meta.env.VITE_API_URL;

function GovernmentJobs() {
  const navigate = useNavigate();

  const [governmentJobs, setGovernmentJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchGovernmentJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/api/admin/jobs/government`
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to load government jobs"
        );
      }

      setGovernmentJobs(data.jobs || []);

    } catch (err) {
      console.error("Government jobs error:", err);
      setError("Government jobs could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGovernmentJobs();
  }, []);

  return (
    <div className="government-jobs-page">

      <Navbar />

      {/* HERO */}
      <section className="government-hero">

        <div className="government-hero-content">

          <span className="government-badge">
            GOVERNMENT JOB OPPORTUNITIES
          </span>

          <h1>
            Explore <span>Government Careers</span>
          </h1>

          <p>
            Explore government job opportunities, eligibility,
            qualifications and official application links.
          </p>

        </div>

      </section>

      {/* JOBS */}
      <section className="government-section">

        <div className="government-heading">

          <div>
            <span>EXPLORE GOVERNMENT JOBS</span>

            <h2>
              Latest Government Job Opportunities
            </h2>
          </div>

          <p>
            Always verify the latest recruitment information
            through the official recruitment authority.
          </p>

        </div>

        {/* LOADING */}
        {loading && (
          <div className="empty-state">
            <h3>Loading government jobs...</h3>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="empty-state">
            <h3>{error}</h3>

            <button onClick={fetchGovernmentJobs}>
              Try Again
            </button>
          </div>
        )}

        {/* NO JOBS */}
        {!loading &&
          !error &&
          governmentJobs.length === 0 && (

            <div className="empty-state">

              <div className="empty-icon">
                🏛️
              </div>

              <h3>
                No government jobs available
              </h3>

              <p>
                New government job opportunities will
                appear here.
              </p>

            </div>

          )}

        {/* JOB GRID */}
        {!loading &&
          !error &&
          governmentJobs.length > 0 && (

            <div className="government-grid">

              {governmentJobs.map((job) => (

                <div
                  className="government-job-card"
                  key={job._id}
                >

                  <div className="government-card-top">

                    <div className="government-icon">
                      {job.icon || "🏛️"}
                    </div>

                    <span className="government-type">
                      Government
                    </span>

                  </div>

                  <h3>
                    {job.title}
                  </h3>

                  <div className="government-info">

                    <div>
                      <strong>
                        Organization:
                      </strong>

                      <span>
                        {job.organization}
                      </span>
                    </div>

                    <div>
                      <strong>
                        Location:
                      </strong>

                      <span>
                        {job.location}
                      </span>
                    </div>

                    <div>
                      <strong>
                        Qualification:
                      </strong>

                      <span>
                        {job.qualification}
                      </span>
                    </div>

                    {job.lastDate && (
                      <div>
                        <strong>
                          Last Date:
                        </strong>

                        <span>
                          {job.lastDate}
                        </span>
                      </div>
                    )}

                  </div>

                  {/* DESCRIPTION */}
                  {job.description && (
                    <div className="government-skills">

                      <div className="government-skills-title">
                        📋 Job Details
                      </div>

                      <p>
                        {job.description}
                      </p>

                    </div>
                  )}

                  {/* APPLY */}
                  {job.applyLink && (
                    <div className="government-apply">

                      <a
                        href={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                        <span>↗</span>
                      </a>

                    </div>
                  )}

                </div>

              ))}

            </div>

          )}

      </section>

      {/* NOTE */}
      <section className="government-note">

        <div className="government-note-icon">
          💡
        </div>

        <div>

          <h3>
            Important to Know
          </h3>

          <p>
            Government job eligibility, age limits, examinations,
            vacancies and selection procedures can change over time.
            Always verify the latest information through the official
            recruitment authority before applying.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="government-cta">

        <div>

          <span>
            NEED CAREER GUIDANCE?
          </span>

          <h2>
            Not sure which career suits you?
          </h2>

          <p>
            Take our assessment and discover career paths
            based on your interests and skills.
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

export default GovernmentJobs;