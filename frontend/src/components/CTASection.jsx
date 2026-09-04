import ctaBooks from "../assets/cta-books.png";
import ctaBulb from "../assets/cta-bulb.png";
import "../styles/ctaSection.css";

function CTASection() {
  return (
    <section className="career-cta">

      {/* LEFT IMAGE */}
      <div className="career-cta-left-image">
        <img
          src={ctaBooks}
          alt="Education"
        />
      </div>

      {/* CONTENT */}
      <div className="career-cta-content">
        <h2>Not sure what to do next?</h2>

        <p>
          Start your personalized career assessment
          <br />
          and discover your options.
        </p>
      </div>

      {/* BUTTON */}
      <a href="/assessment" className="career-cta-button">
        Start Assessment
        <span>→</span>
      </a>

      {/* RIGHT IMAGE */}
      <div className="career-cta-right-image">
        <img
          src={ctaBulb}
          alt="Career assessment"
        />
      </div>

    </section>
  );
}

export default CTASection;