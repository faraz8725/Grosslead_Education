import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/results.css";

function Results() {
  const [userData] = useState(() => {
    const savedData = localStorage.getItem("assessmentData");

    try {
      return savedData ? JSON.parse(savedData) : null;
    } catch {
      return null;
    }
  });

  const [recommendations] = useState(() => {
    const savedRecommendations = localStorage.getItem(
      "careerRecommendations"
    );

    try {
      return savedRecommendations
        ? JSON.parse(savedRecommendations)
        : [];
    } catch {
      return [];
    }
  });

  return (
    <div className="results-page">

      <Navbar />

      <main className="results-container">

        {/* HERO */}
        <section className="results-intro">

          <div className="results-label">
            <span className="label-dot"></span>
            YOUR PERSONALIZED RESULTS
          </div>

          <h2>
            Hello, {userData?.name || "Student"} 👋
          </h2>

          <h1>
            Career paths that may
            <span> suit you.</span>
          </h1>

          <p>
            Our AI analyzed your education, interests, skills and goals
            to find career paths that match your profile.
          </p>

          <div className="ai-badge">
            <span>✦</span>
            AI-Powered Career Recommendations
          </div>

        </section>


        {/* PROFILE SUMMARY */}
        {userData && (
          <section className="profile-summary">

            <div className="profile-item">
              <div className="profile-icon">🎓</div>

              <div>
                <small>QUALIFICATION</small>

                <strong>
                  {userData.qualification || "Not provided"}
                </strong>
              </div>
            </div>


            <div className="profile-item">
              <div className="profile-icon">📚</div>

              <div>
                <small>STREAM</small>

                <strong>
                  {userData.stream || "Not provided"}
                </strong>
              </div>
            </div>


            <div className="profile-item">
              <div className="profile-icon">🎯</div>

              <div>
                <small>GOAL</small>

                <strong>
                  {userData.goal || "Not provided"}
                </strong>
              </div>
            </div>


            <div className="profile-item">
              <div className="profile-icon">💰</div>

              <div>
                <small>BUDGET</small>

                <strong>
                  {userData.budget || "Not provided"}
                </strong>
              </div>
            </div>

          </section>
        )}


        {/* RECOMMENDATION HEADING */}
        <section className="recommendation-title">

          <div>
            <span className="section-label">
              YOUR AI ANALYSIS
            </span>

            <h2>
              Recommended Careers
            </h2>

            <p>
              Based on your assessment profile, these career paths
              could be a strong fit for you.
            </p>
          </div>

          <div className="recommendation-count">
            <strong>{recommendations.length}</strong>
            <span>Career Matches</span>
          </div>

        </section>


        {/* CAREER RECOMMENDATIONS */}
        <div className="recommendation-list">

          {recommendations.length > 0 ? (

            recommendations.map((career, index) => {

              const careerName =
                career.career || "Career Recommendation";

              const match =
                career.match !== undefined
                  ? career.match
                  : 0;

              const reason =
                career.reason ||
                "This career matches the information provided in your assessment.";

              const skills = Array.isArray(career.skills)
                ? career.skills
                : [];

              const courses = Array.isArray(career.courses)
                ? career.courses
                : [];

              return (
                <article
                  className={`career-card ${
                    index === 0 ? "top-career" : ""
                  }`}
                  key={`${careerName}-${index}`}
                >

                  {/* RANK */}
                  <div className="career-rank">
                    {index === 0 ? "🏆" : `0${index + 1}`}
                  </div>


                  <div className="career-card-main">

                    {/* CAREER TITLE + MATCH */}
                    <div className="career-card-top">

                      <div>
                        <span className="career-number">
                          CAREER {String(index + 1).padStart(2, "0")}
                        </span>

                        <h2>{careerName}</h2>
                      </div>


                      <div className="match-box">
                        <strong>{match}%</strong>
                        <span>Match</span>
                      </div>

                    </div>


                    {/* MATCH BAR */}
                    <div className="match-progress">

                      <div className="match-progress-track">

                        <div
                          className="match-progress-fill"
                          style={{
                            width: `${Math.min(
                              Math.max(Number(match) || 0, 0),
                              100
                            )}%`
                          }}
                        ></div>

                      </div>

                      <span>
                        Strong career match
                      </span>

                    </div>


                    {/* REASON */}
                    <div className="career-reason">

                      <div className="reason-icon">
                        ✦
                      </div>

                      <div>
                        <h3>
                          Why this career suits you
                        </h3>

                        <p>
                          {reason}
                        </p>
                      </div>

                    </div>


                    {/* SKILLS + COURSES */}
                    {(skills.length > 0 || courses.length > 0) && (

                      <div className="career-details">

                        {skills.length > 0 && (

                          <div className="detail-column">

                            <h3>
                              <span>⚡</span>
                              Skills to Build
                            </h3>

                            <div className="detail-tags">

                              {skills.map((skill, skillIndex) => (

                                <span key={skillIndex}>
                                  {skill}
                                </span>

                              ))}

                            </div>

                          </div>

                        )}


                        {courses.length > 0 && (

                          <div className="detail-column">

                            <h3>
                              <span>📘</span>
                              Suggested Courses
                            </h3>

                            <div className="course-list">

                              {courses.map((course, courseIndex) => (

                                <span key={courseIndex}>
                                  {course}
                                </span>

                              ))}

                            </div>

                          </div>

                        )}

                      </div>

                    )}

                  </div>

                </article>
              );
            })

          ) : (

            <div className="no-results">

              <div className="no-results-icon">
                🎯
              </div>

              <h2>
                No recommendations available
              </h2>

              <p>
                Please complete the assessment again to generate
                personalized career recommendations.
              </p>

              <Link to="/assessment">
                Take Assessment Again →
              </Link>

            </div>

          )}

        </div>


        {/* INTERESTS */}
        {userData?.interests?.length > 0 && (

          <section className="interest-summary">

            <div className="interest-heading">

              <div>
                <span className="section-label">
                  YOUR PROFILE
                </span>

                <h2>
                  Your Interests
                </h2>
              </div>

              <span className="interest-count">
                {userData.interests.length} selected
              </span>

            </div>


            <div className="tags">

              {userData.interests.map((interest) => (

                <span key={interest}>
                  <span className="tag-check">
                    ✓
                  </span>

                  {interest}
                </span>

              ))}

            </div>

          </section>

        )}

      </main>

    </div>
  );
}

export default Results;