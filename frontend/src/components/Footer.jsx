import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="edu-footer">

      <div className="edu-footer-inner">

        {/* ================= BRAND ================= */}

        <div className="edu-footer-brand">

          <a href="/" className="edu-footer-logo">

            <div className="edu-footer-logo-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>

            <span>Educational</span>

          </a>

          <p>
            Find the right career path and build
            <br />
            a better future with confidence.
          </p>


          {/* Social Icons */}

          <div className="edu-footer-social">

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="Twitter">
              𝕏
            </a>

          </div>

        </div>


        {/* ================= EXPLORE ================= */}

        <div className="edu-footer-column">

          <h4>Explore</h4>

          <a href="/">Home</a>
          <a href="/careers">Careers</a>
          <a href="/jobs">Jobs</a>
          <a href="/about">About</a>

        </div>


        {/* ================= SUPPORT ================= */}

        <div className="edu-footer-column">

          <h4>Support</h4>

          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>

        </div>


        {/* ================= CONTACT ================= */}

        <div className="edu-footer-contact">

          <h4>Get in touch</h4>

          <a
            href="mailto:contact@educational.com"
            className="edu-footer-email"
          >
            <span className="email-icon">✉</span>
            <span>contact@educational.com</span>
          </a>

          <div className="contact-divider"></div>

          <div className="edu-footer-contact-social">

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="Twitter">
              𝕏
            </a>

          </div>

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