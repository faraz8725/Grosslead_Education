import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/careers.css";

// const API_URL = "http://localhost:5000";
const API_URL = import.meta.env.VITE_API_URL;

function Careers() {
  const navigate = useNavigate();

  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCareers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/api/admin/careers`
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to load careers"
        );
      }

      setCareers(data.careers || []);
    } catch (err) {
      console.error("Careers error:", err);
      setError("Career data could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  return (
    <div className="careers-page">

      <Navbar />

      {/* HERO */}
      <section className="careers-hero">
        <div className="careers-hero-content">

          <span className="careers-badge">
            CAREER OPTIONS
          </span>

          <h1>
            Explore Your <span>Career</span> Options
          </h1>

          <p>
            Discover different career paths, understand the
            skills required and find a direction that matches
            your interests.
          </p>

        </div>
      </section>


      {/* CAREERS */}
      <section className="careers-section">

        <div className="careers-heading">

          <div>
            <span>FIND YOUR PATH</span>

            <h2>
              Popular Career Choices
            </h2>
          </div>

          <p>
            Explore different career options and learn about
            education, skills, courses and career roadmaps.
          </p>

        </div>


        {/* LOADING */}
        {loading && (
          <div className="empty-state">
            <h3>Loading careers...</h3>
          </div>
        )}


        {/* ERROR */}
        {!loading && error && (
          <div className="empty-state">

            <h3>{error}</h3>

            <button onClick={fetchCareers}>
              Try Again
            </button>

          </div>
        )}


        {/* NO CAREERS */}
        {!loading &&
          !error &&
          careers.length === 0 && (

            <div className="empty-state">

              <h3>No careers available</h3>

              <p>
                Career information will appear here.
              </p>

            </div>
          )}


        {/* CAREER GRID */}
        {!loading &&
          !error &&
          careers.length > 0 && (

            <div className="career-grid">

              {careers.map((career) => (

                <div
                  className="career-card"
                  key={career._id || career.slug}
                >

                  {/* TOP */}
                  <div className="career-card-top">

                    <div className="career-icon">
                      {career.icon || "🎯"}
                    </div>

                    <span className="career-category">
                      {career.category}
                    </span>

                  </div>


                  {/* TITLE */}
                  <h3>
                    {career.title}
                  </h3>


                  {/* DESCRIPTION */}
                  {career.description && (
                    <p className="career-description">
                      {career.description}
                    </p>
                  )}


                  {/* EDUCATION */}
                  {career.education && (
                    <div className="career-detail-box">

                      <h4>
                        🎓 Education Required
                      </h4>

                      <p>
                        {career.education}
                      </p>

                    </div>
                  )}


                  {/* SKILLS */}
                  {career.skills &&
                    career.skills.length > 0 && (

                      <div className="career-detail-box">

                        <h4>
                          🛠️ Required Skills
                        </h4>

                        <div className="career-skills">

                          {career.skills.map(
                            (skill, index) => (
                              <span key={index}>
                                {skill}
                              </span>
                            )
                          )}

                        </div>

                      </div>
                    )}


                  {/* COURSES */}
                  {career.courses &&
                    career.courses.length > 0 && (

                      <div className="career-detail-box">

                        <h4>
                          📚 Recommended Courses
                        </h4>

                        <ul>
                          {career.courses.map(
                            (course, index) => (
                              <li key={index}>
                                {course}
                              </li>
                            )
                          )}
                        </ul>

                      </div>
                    )}


                  {/* ROADMAP */}
                  {career.roadmap &&
                    career.roadmap.length > 0 && (

                      <div className="career-detail-box">

                        <h4>
                          🗺️ Career Roadmap
                        </h4>

                        <ol>
                          {career.roadmap.map(
                            (step, index) => (
                              <li key={index}>
                                {step}
                              </li>
                            )
                          )}
                        </ol>

                      </div>
                    )}

                </div>

              ))}

            </div>
          )}

      </section>


      {/* CTA */}
      <section className="careers-cta">

        <div>

          <span>
            NOT SURE WHAT TO CHOOSE?
          </span>

          <h2>
            Find a career that fits you.
          </h2>

          <p>
            Take our simple career assessment and get
            personalized career recommendations.
          </p>

        </div>

        <button
          onClick={() => navigate("/assessment")}
        >
          Start Assessment →
        </button>

      </section>


      <Footer />

    </div>
  );
}

export default Careers;