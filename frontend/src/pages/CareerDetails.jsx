import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/careerDetails.css";

const careerData = {
  "software-developer": {
    title: "Software Developer",
    category: "Technology",
    description:
      "Software developers design, build and maintain websites, applications and software systems.",

    education:
      "B.Tech, BCA, B.Sc Computer Science or another relevant degree can be useful. Strong programming skills and practical projects are also important.",

    skills: [
      "Programming",
      "Problem Solving",
      "HTML & CSS",
      "JavaScript",
      "React",
      "Backend Development",
      "Database Basics",
      "Git & GitHub",
    ],

    courses: [
      "Programming Fundamentals",
      "Web Development",
      "JavaScript",
      "React",
      "Node.js & Backend Development",
      "MongoDB",
    ],

    roadmap: [
      "Learn programming fundamentals",
      "Learn HTML, CSS and JavaScript",
      "Build small web projects",
      "Learn React",
      "Learn backend development with Node.js",
      "Learn databases such as MongoDB",
      "Learn Git and GitHub",
      "Build 3–5 strong portfolio projects",
      "Apply for internships and entry-level jobs",
    ],
  },

  "data-analyst": {
    title: "Data Analyst",
    category: "Data & Analytics",
    description:
      "Data analysts collect, clean and analyze data to help organizations make better decisions.",

    education:
      "B.Com, BBA, B.Sc, B.Tech, Economics or another relevant degree can be useful.",

    skills: [
      "Excel",
      "SQL",
      "Data Analysis",
      "Statistics",
      "Python",
      "Data Visualization",
      "Power BI",
      "Problem Solving",
    ],

    courses: [
      "Advanced Excel",
      "SQL",
      "Statistics",
      "Python for Data Analysis",
      "Power BI",
      "Data Visualization",
    ],

    roadmap: [
      "Learn Excel basics",
      "Learn advanced Excel and formulas",
      "Learn basic statistics",
      "Learn SQL",
      "Learn Python for data analysis",
      "Learn Power BI or another visualization tool",
      "Build real-world data projects",
      "Create a portfolio",
      "Apply for internships and data analyst jobs",
    ],
  },

  "healthcare-professional": {
    title: "Healthcare Professional",
    category: "Medical & Healthcare",
    description:
      "Healthcare professionals work in areas such as medicine, nursing, diagnostics, pharmacy and other health-related services.",

    education:
      "The required education depends on the healthcare profession. Options may include MBBS, BDS, B.Pharm, B.Sc Nursing, allied health programs and other specialized qualifications.",

    skills: [
      "Communication",
      "Patient Care",
      "Scientific Knowledge",
      "Problem Solving",
      "Observation",
      "Teamwork",
      "Empathy",
    ],

    courses: [
      "Healthcare Foundations",
      "Biology",
      "Medical Basics",
      "Healthcare Management",
      "Communication Skills",
    ],

    roadmap: [
      "Identify your preferred healthcare field",
      "Complete the required academic qualification",
      "Build strong science fundamentals",
      "Develop communication and patient-care skills",
      "Complete practical training or internships",
      "Obtain required professional certifications or registration",
      "Gain experience in healthcare settings",
      "Build a long-term healthcare career",
    ],
  },

  "ui-ux-designer": {
    title: "UI/UX Designer",
    category: "Design & Technology",
    description:
      "UI/UX designers create useful, simple and visually appealing experiences for websites, applications and digital products.",

    education:
      "Any relevant degree or diploma can be useful. Strong design skills, practical projects and a good portfolio are especially important.",

    skills: [
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Figma",
      "Typography",
      "Visual Design",
      "User Research",
    ],

    courses: [
      "UI/UX Design",
      "Figma",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],

    roadmap: [
      "Learn basic design principles",
      "Learn typography and visual hierarchy",
      "Learn Figma",
      "Learn UX research",
      "Create wireframes",
      "Create interactive prototypes",
      "Build 3–5 portfolio projects",
      "Create an online portfolio",
      "Apply for internships and junior design roles",
    ],
  },

  "financial-analyst": {
    title: "Financial Analyst",
    category: "Finance",
    description:
      "Financial analysts study financial information and help businesses and investors make informed decisions.",

    education:
      "B.Com, BBA, Economics, Finance or another relevant degree can provide a strong foundation.",

    skills: [
      "Excel",
      "Financial Analysis",
      "Accounting",
      "Statistics",
      "Financial Modeling",
      "Data Analysis",
      "Communication",
    ],

    courses: [
      "Advanced Excel",
      "Accounting",
      "Financial Analysis",
      "Financial Modeling",
      "Financial Markets",
      "Business Analytics",
    ],

    roadmap: [
      "Learn accounting basics",
      "Improve Excel skills",
      "Learn financial analysis",
      "Understand financial statements",
      "Learn financial modeling",
      "Build practical finance projects",
      "Gain internship experience",
      "Build a professional resume",
      "Apply for finance and analyst roles",
    ],
  },

  "business-management": {
    title: "Business & Management",
    category: "Business & Management",
    description:
      "Business and management careers involve planning, operations, marketing, leadership and helping organizations grow.",

    education:
      "BBA, B.Com, Economics, Management or another relevant degree can be useful. An MBA can be considered for advanced management roles.",

    skills: [
      "Communication",
      "Leadership",
      "Business Strategy",
      "Marketing",
      "Problem Solving",
      "Team Management",
      "Financial Basics",
      "Decision Making",
    ],

    courses: [
      "Business Management",
      "Marketing",
      "Entrepreneurship",
      "Business Analytics",
      "Leadership",
      "Digital Marketing",
    ],

    roadmap: [
      "Learn basic business concepts",
      "Develop communication skills",
      "Learn marketing fundamentals",
      "Understand business finance",
      "Develop leadership skills",
      "Work on business case studies",
      "Complete internships or practical projects",
      "Build professional experience",
      "Explore management or entrepreneurship opportunities",
    ],
  },

  "government-services": {
    title: "Government Services",
    category: "Government & Public Sector",
    description:
      "Government careers include opportunities in public administration, government departments, public-sector organizations and competitive examinations.",

    education:
      "Eligibility depends on the examination or government position. Many graduate-level government examinations require a recognized bachelor's degree.",

    skills: [
      "General Knowledge",
      "Current Affairs",
      "Reasoning",
      "Quantitative Aptitude",
      "Communication",
      "Time Management",
      "Analytical Thinking",
    ],

    courses: [
      "Government Exam Preparation",
      "Quantitative Aptitude",
      "Reasoning",
      "General Knowledge",
      "Current Affairs",
      "English & Communication",
    ],

    roadmap: [
      "Choose the government career or examination you want to target",
      "Understand the eligibility requirements",
      "Study the examination syllabus",
      "Build strong reasoning and aptitude skills",
      "Study general knowledge and current affairs",
      "Practice previous-year questions",
      "Take regular mock tests",
      "Prepare strategically for the examination",
      "Apply for suitable government opportunities",
    ],
  },

  "teacher-educator": {
    title: "Teacher / Educator",
    category: "Education",
    description:
      "Teachers and educators help students learn, develop skills and understand academic concepts.",

    education:
      "The required qualification depends on the teaching level and institution. Relevant degrees, teacher-training qualifications and required eligibility tests may be needed.",

    skills: [
      "Communication",
      "Teaching",
      "Presentation",
      "Subject Knowledge",
      "Patience",
      "Classroom Management",
      "Leadership",
    ],

    courses: [
      "Teaching Fundamentals",
      "Communication Skills",
      "Educational Psychology",
      "Classroom Management",
      "Subject-Specific Training",
      "Digital Teaching",
    ],

    roadmap: [
      "Choose the subject or age group you want to teach",
      "Build strong subject knowledge",
      "Complete the required educational qualification",
      "Develop communication and presentation skills",
      "Learn teaching methodologies",
      "Gain practical teaching experience",
      "Complete required eligibility or certification processes",
      "Apply for teaching opportunities",
      "Continue developing professionally",
    ],
  },

  researcher: {
    title: "Researcher",
    category: "Research & Science",
    description:
      "Researchers investigate questions, analyze information and develop new knowledge in areas such as science, technology, social sciences and other academic fields.",

    education:
      "A bachelor's degree can be a starting point, while master's and doctoral qualifications are commonly useful for advanced research careers.",

    skills: [
      "Research",
      "Critical Thinking",
      "Data Analysis",
      "Problem Solving",
      "Scientific Thinking",
      "Writing",
      "Communication",
    ],

    courses: [
      "Research Methodology",
      "Statistics",
      "Data Analysis",
      "Academic Writing",
      "Scientific Research",
      "Research Tools",
    ],

    roadmap: [
      "Choose a research field",
      "Build strong fundamentals in that subject",
      "Learn research methodology",
      "Learn statistics and data analysis",
      "Read research papers and academic material",
      "Work on research projects",
      "Develop academic writing skills",
      "Consider higher studies for advanced research roles",
      "Build research experience and publications",
    ],
  },

  "career-exploration": {
    title: "Career Exploration",
    category: "Career Guidance",
    description:
      "Career exploration helps you understand different career paths before choosing a specific direction.",

    education:
      "Your education requirements will depend on the career path you eventually choose.",

    skills: [
      "Self Awareness",
      "Communication",
      "Problem Solving",
      "Research",
      "Decision Making",
      "Time Management",
    ],

    courses: [
      "Career Planning",
      "Communication Skills",
      "Digital Skills",
      "Basic Computer Skills",
      "Career Exploration",
    ],

    roadmap: [
      "Understand your interests",
      "Identify your strengths and weaknesses",
      "Explore different career options",
      "Research education requirements",
      "Compare career opportunities",
      "Talk to professionals and mentors",
      "Try small projects or internships",
      "Shortlist suitable career paths",
      "Create a personal career plan",
    ],
  },
};

function CareerDetails() {
  const { career } = useParams();
  const data = careerData[career];

  if (!data) {
    return (
      <>
        <Navbar />

        <main className="career-details-not-found">
          <div className="career-details-not-found-icon">🔎</div>

          <h1>Career Not Found</h1>

          <p>
            Sorry, we could not find the career you are looking for.
          </p>

          <Link
            to="/careers"
            className="career-details-not-found-btn"
          >
            ← Explore Careers
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <div className="career-details-page">
      <Navbar />

      <section className="career-details-hero">
        <div className="career-details-container">

          <Link
            to="/careers"
            className="career-details-back-link"
          >
            ← Back to Careers
          </Link>

          <div className="career-details-hero-card">

            <div className="career-details-hero-content">

              <span className="career-details-category">
                {data.category}
              </span>

              <h1>{data.title}</h1>

              <p>{data.description}</p>

              <div className="career-details-quick-points">
                <span>✓ Skills Required</span>
                <span>✓ Useful Courses</span>
                <span>✓ Career Roadmap</span>
              </div>

            </div>

            <div className="career-details-hero-visual">

              <div className="career-details-visual-icon">
                🎯
              </div>

              <span>CAREER PATH</span>

              <strong>Build Your Future</strong>

            </div>

          </div>
        </div>
      </section>

      <main className="career-details-main">
        <div className="career-details-container">

          {/* EDUCATION */}
          <section className="career-details-info-card">

            <div className="career-details-section-icon career-details-education-icon">
              🎓
            </div>

            <div className="career-details-section-content">

              <span className="career-details-section-label">
                EDUCATION
              </span>

              <h2>Education Required</h2>

              <p>{data.education}</p>

            </div>

          </section>

          {/* SKILLS */}
          <section className="career-details-content-section">

            <div className="career-details-section-heading">

              <div>
                <span>BUILD YOUR SKILLS</span>
                <h2>Important Skills</h2>
              </div>

              <p>
                Focus on these skills to prepare yourself for
                this career path.
              </p>

            </div>

            <div className="career-details-tags">

              {data.skills.map((skill, index) => (
                <span key={skill}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  {skill}
                </span>
              ))}

            </div>

          </section>

          {/* COURSES */}
          <section className="career-details-content-section">

            <div className="career-details-section-heading">

              <div>
                <span>LEARN & GROW</span>
                <h2>Useful Courses</h2>
              </div>

              <p>
                These learning areas can help you build the
                knowledge required for this career.
              </p>

            </div>

            <div className="career-details-course-grid">

              {data.courses.map((course, index) => (
                <div
                  className="career-details-course-card"
                  key={course}
                >

                  <div className="career-details-course-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{course}</h3>
                    <p>Recommended learning area</p>
                  </div>

                  <span className="career-details-course-arrow">
                    →
                  </span>

                </div>
              ))}

            </div>

          </section>

          {/* ROADMAP */}
          <section className="career-details-content-section career-details-roadmap-section">

            <div className="career-details-section-heading">

              <div>
                <span>YOUR JOURNEY</span>
                <h2>Career Roadmap</h2>
              </div>

              <p>
                Follow these practical steps to move from learning
                to building your career.
              </p>

            </div>

            <div className="career-details-roadmap">

              {data.roadmap.map((step, index) => (
                <div
                  className="career-details-roadmap-step"
                  key={step}
                >

                  <div className="career-details-step-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="career-details-roadmap-line"></div>

                  <div className="career-details-roadmap-content">

                    <span>
                      STEP {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{step}</h3>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* CTA */}
          <section className="career-details-cta">

            <div className="career-details-cta-icon">
              🚀
            </div>

            <div className="career-details-cta-content">

              <span>READY TO TAKE THE NEXT STEP?</span>

              <h2>
                Explore if this career is right for you.
              </h2>

              <p>
                Take our career assessment and get personalized
                recommendations based on your interests and strengths.
              </p>

            </div>

            <Link
              to="/assessment"
              className="career-details-cta-btn"
            >
              Take Assessment
              <span>→</span>
            </Link>

          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CareerDetails;