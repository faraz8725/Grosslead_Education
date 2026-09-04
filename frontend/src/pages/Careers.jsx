import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/careers.css";

function Careers() {
  const navigate = useNavigate();

  const careers = [
    {
      icon: "💻",
      title: "Software Developer",
      slug: "software-developer",
      description:
        "Build websites, mobile apps and software using programming.",
      skills: ["JavaScript", "React", "HTML", "CSS"],
    },

    {
      icon: "📊",
      title: "Data Analyst",
      slug: "data-analyst",
      description:
        "Analyze data and turn information into useful business insights.",
      skills: ["Excel", "SQL", "Python", "Analytics"],
    },

    {
      icon: "🎨",
      title: "UI/UX Designer",
      slug: "ui-ux-designer",
      description:
        "Design simple, attractive and user-friendly digital experiences.",
      skills: ["Figma", "Design", "Creativity", "Research"],
    },

    {
      icon: "🩺",
      title: "Healthcare Professional",
      slug: "healthcare-professional",
      description:
        "Help people maintain their health and provide medical care.",
      skills: ["Biology", "Communication", "Research"],
    },

    {
      icon: "💰",
      title: "Financial Analyst",
      slug: "financial-analyst",
      description:
        "Study financial information and help businesses make decisions.",
      skills: ["Finance", "Excel", "Analysis", "Math"],
    },

    {
      icon: "📈",
      title: "Business & Management",
      slug: "business-management",
      description:
        "Plan, manage and grow businesses through strategy and leadership.",
      skills: ["Business", "Leadership", "Marketing", "Strategy"],
    },

    {
      icon: "⚖️",
      title: "Government Services",
      slug: "government-services",
      description:
        "Explore careers in government departments and public-sector services.",
      skills: ["GK", "Reasoning", "Aptitude", "Communication"],
    },

    {
      icon: "👨‍🏫",
      title: "Teacher / Educator",
      slug: "teacher-educator",
      description:
        "Guide students, explain concepts and help them grow.",
      skills: ["Teaching", "Communication", "Patience"],
    },

    {
      icon: "🔬",
      title: "Researcher",
      slug: "researcher",
      description:
        "Investigate questions, analyze information and create new knowledge.",
      skills: ["Research", "Analysis", "Writing", "Critical Thinking"],
    },

    {
      icon: "🧭",
      title: "Career Exploration",
      slug: "career-exploration",
      description:
        "Explore different career paths before choosing a specific direction.",
      skills: ["Research", "Self Awareness", "Decision Making"],
    },
  ];

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
            Discover different career paths, understand the skills
            required and find a direction that matches your interests.
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
            Explore different career options and learn what
            each path can offer.
          </p>

        </div>

        <div className="career-grid">

          {careers.map((career) => (

            <div
              className="career-card"
              key={career.slug}
            >

              <div className="career-card-top">

                <div className="career-icon">
                  {career.icon}
                </div>

                <span className="career-arrow">
                  ↗
                </span>

              </div>

              <h3>
                {career.title}
              </h3>

              <p className="career-description">
                {career.description}
              </p>

              <div className="career-skills">

                {career.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

              <button
                className="career-explore-btn"
                onClick={() =>
                  navigate(`/career/${career.slug}`)
                }
              >
                Explore Career
                <span>→</span>
              </button>

            </div>

          ))}

        </div>

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