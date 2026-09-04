import React from "react";
import "../styles/howItWorks.css";

function HowItWorks() {
  return (
    <section className="edu-how-section" id="how-it-works">

      {/* Heading */}
      <div className="edu-how-heading">
        <span className="edu-how-label">HOW IT WORKS</span>

        <h2>A clearer way forward</h2>

        <p>
          Simple guidance, tailored to where you are today.
        </p>
      </div>

      {/* Three Steps */}
      <div className="edu-how-steps">

        {/* 01 */}
        <div className="edu-how-card">

          <div className="edu-how-icon edu-how-blue">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="3" />
              <path d="M5 20c.5-3.5 2.8-5.5 7-5.5s6.5 2 7 5.5" />
            </svg>
          </div>

          <div className="edu-how-card-content">
            <span className="edu-how-number">01</span>

            <h3>Tell Us About Yourself</h3>

            <p>
              Enter your education, skills,
              interests and budget.
            </p>
          </div>

        </div>


        {/* Arrow */}
        <div className="edu-how-connector">
          <span></span>
          <b>›</b>
        </div>


        {/* 02 */}
        <div className="edu-how-card">

          <div className="edu-how-icon edu-how-green">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18h6" />
              <path d="M10 21h4" />
              <path d="M8.5 14.5c-1.3-1-2-2.5-2-4.3A5.5 5.5 0 0 1 12 4.7a5.5 5.5 0 0 1 5.5 5.5c0 1.8-.7 3.3-2 4.3-.8.7-1.3 1.5-1.5 2.5h-4c-.2-1-.7-1.8-1.5-2.5Z" />
              <path d="M12 2v1" />
              <path d="M4.9 4.9l.7.7" />
              <path d="M2 10h1" />
            </svg>
          </div>

          <div className="edu-how-card-content">
            <span className="edu-how-number">02</span>

            <h3>Get Recommendations</h3>

            <p>
              Our system analyzes your profile
              and suggests suitable options.
            </p>
          </div>

        </div>


        {/* Arrow */}
        <div className="edu-how-connector">
          <span></span>
          <b>›</b>
        </div>


        {/* 03 */}
        <div className="edu-how-card">

          <div className="edu-how-icon edu-how-purple">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="8.5" />
              <circle cx="12" cy="12" r="4" />
              <path d="M12 3.5v4" />
              <path d="M20.5 12h-4" />
              <path d="M12 20.5v-4" />
              <path d="M3.5 12h4" />
            </svg>
          </div>

          <div className="edu-how-card-content">
            <span className="edu-how-number">03</span>

            <h3>Plan Your Future</h3>

            <p>
              Get a career roadmap, required
              skills and next steps.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;