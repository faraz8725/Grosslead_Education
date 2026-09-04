import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/jobs.css";

function Jobs() {
  const jobs = [
    {
      icon: "💻",
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Remote",
      salary: "₹4 - ₹8 LPA",
      experience: "Fresher / Entry Level",
      type: "Full Time",
      skills: [
        "Problem Solving",
        "Debugging",
        "Responsive Design",
        "Teamwork",
      ],
      technologies: [
        "JavaScript",
        "React",
        "HTML",
        "CSS",
      ],
    },

    {
      icon: "📊",
      title: "Data Analyst",
      company: "Insight Labs",
      location: "Bangalore",
      salary: "₹3 - ₹6.5 LPA",
      experience: "Fresher / Entry Level",
      type: "Full Time",
      skills: [
        "Data Analysis",
        "Problem Solving",
        "Statistics",
        "Communication",
      ],
      technologies: [
        "Excel",
        "SQL",
        "Python",
        "Power BI",
      ],
    },

    {
      icon: "🎨",
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Mumbai",
      salary: "₹3 - ₹6 LPA",
      experience: "Fresher / Entry Level",
      type: "Full Time",
      skills: [
        "Creativity",
        "User Research",
        "Wireframing",
        "Problem Solving",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Prototyping",
        "Design Tools",
      ],
    },

    {
      icon: "📱",
      title: "Digital Marketing Executive",
      company: "Growth Media",
      location: "Delhi",
      salary: "₹3 - ₹5 LPA",
      experience: "Fresher / Entry Level",
      type: "Full Time",
      skills: [
        "Communication",
        "Creativity",
        "Content Planning",
        "Analytics",
      ],
      technologies: [
        "SEO",
        "Google Analytics",
        "Social Media",
        "Canva",
      ],
    },

    {
      icon: "💰",
      title: "Financial Analyst",
      company: "Finance Hub",
      location: "Pune",
      salary: "₹4 - ₹8 LPA",
      experience: "Fresher / Entry Level",
      type: "Full Time",
      skills: [
        "Financial Analysis",
        "Problem Solving",
        "Attention to Detail",
        "Communication",
      ],
      technologies: [
        "Excel",
        "Financial Modeling",
        "Accounting",
        "Power BI",
      ],
    },

    {
      icon: "🧑‍💼",
      title: "Business Development Executive",
      company: "Business World",
      location: "Hyderabad",
      salary: "₹3 - ₹6 LPA",
      experience: "Fresher / Entry Level",
      type: "Full Time",
      skills: [
        "Communication",
        "Negotiation",
        "Relationship Building",
        "Sales",
      ],
      technologies: [
        "CRM",
        "Excel",
        "Email",
        "Business Tools",
      ],
    },
  ];

  return (
    <div className="jobs-page">

      {/* NAVBAR */}
      <Navbar />


      {/* HERO */}
      <section className="jobs-hero">
        <div className="jobs-hero-content">

          <span className="jobs-badge">
            JOB OPPORTUNITIES
          </span>

          <h1>
            Find Your Next <span>Opportunity</span>
          </h1>

          <p>
            Explore popular career opportunities, understand the
            skills required and learn what you need to start your career.
          </p>

        </div>
      </section>


      {/* JOBS */}
      <section className="jobs-section">

        <div className="jobs-heading">

          <div>
            <span>EXPLORE JOBS</span>
            <h2>Popular Job Opportunities</h2>
          </div>

          <p>
            Learn about salary ranges, required skills and
            technologies for popular entry-level careers.
          </p>

        </div>


        <div className="jobs-grid">

          {jobs.map((job) => (

            <div
              className="job-card"
              key={job.title}
            >

              {/* CARD TOP */}
              <div className="job-card-top">

                <div className="job-icon">
                  {job.icon}
                </div>

                <span className="job-type">
                  {job.type}
                </span>

              </div>


              {/* TITLE */}
              <h3>
                {job.title}
              </h3>

              <p className="job-company">
                {job.company}
              </p>


              {/* LOCATION + SALARY */}
              <div className="job-info">

                <span>
                  📍 {job.location}
                </span>

                <span>
                  💰 {job.salary}
                </span>

              </div>


              {/* EXPERIENCE */}
              <div className="job-detail">

                <div className="job-detail-label">
                  🎓 Experience
                </div>

                <p>
                  {job.experience}
                </p>

              </div>


              {/* SKILLS */}
              <div className="job-detail">

                <div className="job-detail-label">
                  🛠️ Skills
                </div>

                <div className="job-tags">

                  {job.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>


              {/* TECHNOLOGIES */}
              <div className="job-detail">

                <div className="job-detail-label">
                  💻 Languages & Technologies
                </div>

                <div className="job-tags">

                  {job.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="jobs-cta">

        <div>

          <span>READY TO START?</span>

          <h2>
            Find the right career direction.
          </h2>

          <p>
            Not sure which job or career is right for you?
            Take our assessment and get personalized recommendations.
          </p>

        </div>

        <button
          onClick={() =>
            (window.location.href = "/assessment")
          }
        >
          Take Assessment →
        </button>

      </section>


      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Jobs;