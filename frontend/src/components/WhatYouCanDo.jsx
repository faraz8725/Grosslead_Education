import React from "react";
import "../styles/whatYouCanDo.css";

const features = [
  {
    icon: "🎯",
    title: "Career Recommendations",
    text: "Discover paths that match your strengths and interests.",
  },
  {
    icon: "🗺️",
    title: "Education Loan",
    text: "See practical steps from today to your goals.",
  },
  {
    icon: "📊",
    title: "Skill Gap Analysis",
    text: "Understand which skills to build next.",
  },
  {
    icon: "💼",
    title: "Job Recommendations",
    text: "Find opportunities aligned with your profile.",
  },
];

function WhatYouCanDo() {
  return (
    <section className="what-you-can-do">
      <div className="what-container">

        <p className="section-label">WHAT YOU CAN DO</p>

        <h2>Everything you need to make a confident choice</h2>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatYouCanDo;