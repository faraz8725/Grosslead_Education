import React from "react";
import "../styles/footer.css";

import logo from "../assets/web-logo.png";

function Footer() {
  return (
    <footer className="edu-footer">

      <div className="edu-footer-inner">

        {/* ================= BRAND ================= */}

        <div className="edu-footer-brand">

          <a href="/" className="edu-footer-logo">

            <img
              src={logo}
              alt="Educational"
              className="edu-footer-logo-image"
            />

            <span>Genz Grow</span>

          </a>

          <p>
            Find the right career path and build
            <br />
            a better future with confidence.
          </p>

        </div>


        {/* ================= EXPLORE ================= */}

        <div className="edu-footer-column">

          <h4>Explore</h4>

          <a href="/">Home</a>
          <a href="/careers">Careers</a>
          <a href="/jobs">Jobs</a>
          <a href="/about">About</a>
          <a href="/educationloan">Eduaction Loan</a>

        </div>


        {/* ================= CONTACT ================= */}

        <div className="edu-footer-contact">

          <h4>Get in touch</h4>

          <a
            href="mailto:contact@educational.com"
            className="edu-footer-email"
          >
            <span className="email-icon">✉</span>
            <span>Business.grosslead@gmail.com</span>
          </a>

          <div className="contact-divider"></div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="edu-footer-bottom">

        <p>
          © 2026 Educational. All rights reserved.
        </p>

        <div className="edu-footer-bottom-links">

          <a href="/privacy">Privacy</a>

          <span>•</span>

          <a href="/terms">Terms</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;