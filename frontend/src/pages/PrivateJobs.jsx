import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/privateJobs.css";

function PrivateJobs() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPrivateJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/admin/jobs/private"
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to load private jobs"
        );
      }

      setJobs(data.jobs || []);

    } catch (err) {
      console.error("Private jobs error:", err);
      setError("Private jobs could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrivateJobs();
  }, []);

  return (
    <div className="private-jobs-page">

      <Navbar />

      {/* HERO */}
      <section className="private-jobs-hero">

        <div className="private-jobs-hero-content">

          <span className="private-jobs-badge">
            PRIVATE SECTOR
          </span>

          <h1>
            Explore Private <span>Job Opportunities</span>
          </h1>

          <p>
            Discover private-sector job opportunities,
            companies, locations, qualifications and salary details.
          </p>

        </div>

      </section>

      {/* JOBS */}
      <section className="private-jobs-section">

        <div className="private-jobs-heading">

          <div>

            <span>
              EXPLORE PRIVATE JOBS
            </span>

            <h2>
              Latest Job Opportunities
            </h2>

          </div>

          <p>
            Explore opportunities added by the administrator.
          </p>

        </div>

        {/* LOADING */}
        {loading && (
          <div className="empty-state">
            <h3>
              Loading private jobs...
            </h3>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="empty-state">

            <h3>
              {error}
            </h3>

            <button onClick={fetchPrivateJobs}>
              Try Again
            </button>

          </div>
        )}

        {/* NO JOBS */}
        {!loading &&
          !error &&
          jobs.length === 0 && (

            <div className="empty-state">

              <div className="empty-icon">
                💼
              </div>

              <h3>
                No private jobs available
              </h3>

              <p>
                New private-sector jobs will appear here.
              </p>

            </div>

          )}

        {/* JOB GRID */}
        {!loading &&
          !error &&
          jobs.length > 0 && (

            <div className="private-jobs-grid">

              {jobs.map((job) => (

                <div
                  className="private-job-card"
                  key={job._id}
                >

                  {/* CARD TOP */}
                  <div className="private-job-card-top">

                    <div className="private-job-icon">
                      {job.icon || "💼"}
                    </div>

                    <span className="private-job-type">
                      Private
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3>
                    {job.title}
                  </h3>

                  <p className="private-job-company">
                    {job.company}
                  </p>

                  {/* LOCATION */}
                  <div className="private-job-info">

                    <span>
                      📍 {job.location}
                    </span>

                    {job.salary && (
                      <span>
                        💰 {job.salary}
                      </span>
                    )}

                  </div>

                  {/* QUALIFICATION */}
                  <div className="private-job-detail">

                    <div className="private-job-detail-label">
                      🎓 Qualification
                    </div>

                    <p>
                      {job.qualification}
                    </p>

                  </div>

                  {/* LAST DATE */}
                  {job.lastDate && (
                    <div className="private-job-detail">

                      <div className="private-job-detail-label">
                        📅 Last Date
                      </div>

                      <p>
                        {job.lastDate}
                      </p>

                    </div>
                  )}

                  {/* DESCRIPTION */}
                  {job.description && (
                    <div className="private-job-detail">

                      <div className="private-job-detail-label">
                        📋 Job Details
                      </div>

                      <p>
                        {job.description}
                      </p>

                    </div>
                  )}

                  {/* APPLY */}
                  {job.applyLink && (
                    <div className="private-job-apply">

                      <a
                        href={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now →
                      </a>

                    </div>
                  )}

                </div>

              ))}

            </div>

          )}

      </section>

      {/* CTA */}
      <section className="private-jobs-cta">

        <div>

          <span>
            READY TO START?
          </span>

          <h2>
            Find the right career direction.
          </h2>

          <p>
            Not sure which private-sector career is right for you?
            Take our assessment and get personalized recommendations.
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

export default PrivateJobs;