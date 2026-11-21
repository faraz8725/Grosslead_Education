import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.css";

function About() {
  return (
    <div className="about-page">

      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">

          <span className="about-label">
            ABOUT EDUCATIONAL
          </span>

          <h1>
            Helping You Find the
            <br />
            Right Career Path
          </h1>

          <p>
            Educational is a career guidance platform designed to
            help students understand their options, discover suitable
            careers and plan their future with confidence.
          </p>

        </div>
      </section>


      {/* ABOUT */}
      <section className="about-section">

        <div className="about-container about-grid">

          <div>
            <span className="section-label">
              WHO WE ARE
            </span>

            <h2>
              Making career decisions easier
            </h2>
          </div>

          <div className="about-text">

            <p>
              Choosing a career can be confusing. There are many
              courses, skills, jobs and career paths available today.
            </p>

            <p>
              Educational brings useful information together in
              one place so students can explore their interests,
              understand their strengths and make better decisions.
            </p>

          </div>

        </div>

      </section>


      {/* WHAT WE DO */}
      <section className="about-section about-light">

        <div className="about-container">

          <div className="section-heading">

            <span className="section-label">
              WHAT WE DO
            </span>

            <h2>
              Everything you need to plan your future
            </h2>

            <p>
              Simple tools and useful information to help you
              move forward.
            </p>

          </div>


          <div className="about-cards">

            <div className="about-card">
              <div className="about-icon">🎯</div>

              <h3>Career Guidance</h3>

              <p>
                Discover career options based on your interests,
                education and goals.
              </p>
            </div>


            <div className="about-card">
              <div className="about-icon">📚</div>

              <h3>Course Information</h3>

              <p>
                Explore courses and understand what you can study
                to reach your goals.
              </p>
            </div>


            <div className="about-card">
              <div className="about-icon">💼</div>

              <h3>Job Opportunities</h3>

              <p>
                Find opportunities and understand the skills
                required for different careers.
              </p>
            </div>


            <div className="about-card">
              <div className="about-icon">🗺️</div>

              <h3>Career Roadmaps</h3>

              <p>
                Get a clearer idea of the steps you can take
                towards your desired career.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* MISSION */}
      <section className="about-section">

        <div className="about-container mission-box">

          <div>

            <span className="section-label">
              OUR MISSION
            </span>

            <h2>
              Helping students make confident choices
            </h2>

          </div>

          <p>
            Our goal is to make career guidance simple,
            understandable and accessible. We want every student
            to have a clearer path towards their future.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div className="about-container">

          <h2>
            Not sure what to do next?
          </h2>

          <p>
            Start your career assessment and discover
            suitable options for you.
          </p>

          <a href="/assessment">
            Start Assessment →
          </a>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default About;