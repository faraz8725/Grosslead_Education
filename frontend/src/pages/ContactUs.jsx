import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/contactUs.css";

const API_URL = import.meta.env.VITE_API_URL;

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/loan/enquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
          "Enquiry could not be submitted"
        );
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (err) {
      console.error(
        "Education loan enquiry error:",
        err
      );

      setError(
        err.message ||
        "Server se connection nahi ho pa raha."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-badge">
            EDUCATION LOAN
          </span>

          <h1>
            Looking for an{" "}
            <span>Education Loan?</span>
          </h1>

          <p>
            Have questions about education loan options?
            Fill out the form and share your requirements
            with us.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">
        <div className="contact-container">

          {/* Contact Information */}

          <div className="contact-info">

            <span className="contact-section-label">
              CONTACT US
            </span>

            <h2>
              We're here to help.
            </h2>

            <p>
              Share your education loan requirements with us.
              Our team can guide you with the information you
              need to explore your options.
            </p>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                ✉️
              </div>

              <div>
                <h3>Email</h3>
                <p>
                  contact@educational.com
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                🎓
              </div>

              <div>
                <h3>Enquiry Type</h3>
                <p>
                  Education Loan
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <div className="contact-form-wrapper">

            <h2>
              Education Loan Enquiry
            </h2>

            <p>
              Fill in your details and submit your enquiry.
            </p>

            {submitted && (
              <div className="contact-success">
                Your enquiry has been submitted successfully.
                We will get back to you soon.
              </div>
            )}

            {error && (
              <div className="contact-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* Full Name */}

              <div className="contact-form-group">

                <label htmlFor="name">
                  Full Name *
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Email + Phone */}

              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="email">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="contact-form-group">

                  <label htmlFor="phone">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* Enquiry Type */}

              <div className="contact-form-group">

                <label>
                  Enquiry Type
                </label>

                <div className="contact-enquiry-type">
                  🎓 Education Loan
                </div>

              </div>

              {/* Message */}

              <div className="contact-form-group">

                <label htmlFor="message">
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your education loan requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={loading}
              >
                {loading
                  ? "Submitting..."
                  : "Submit Enquiry →"}
              </button>

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;