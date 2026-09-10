import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/educationLoan.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import loanHero from "../assets/loan-hero-image.png";

const EducationLoan = () => {
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is an education loan?",
      answer:
        "An education loan is financial assistance that can help eligible students manage expenses related to higher education, such as tuition fees and other approved education-related costs.",
    },
    {
      question: "What expenses can an education loan cover?",
      answer:
        "Depending on the lender and loan terms, education loans may cover eligible tuition fees, accommodation, books, equipment and other education-related expenses.",
    },
    {
      question: "Who can apply for an education loan?",
      answer:
        "Students who have admission to an eligible course or recognized institution may be able to apply. Eligibility and requirements vary by lender.",
    },
    {
      question: "What documents are generally required?",
      answer:
        "Common documents may include identity proof, academic records, admission documents and financial documents. The exact requirements depend on the lender.",
    },
    {
      question: "Can I get an education loan for studying abroad?",
      answer:
        "Yes, some lenders provide education loans for eligible international education programs. Requirements and loan conditions vary depending on the lender and course.",
    },
  ];

  // Navigate to Contact Us page
  const goToContact = () => {
    navigate("/contact");
  };

  // Scroll to information section
  const scrollToInfo = () => {
    document
      .getElementById("education-loan-info")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      <Navbar />

      <main className="education-loan-page">

        {/* ================= HERO ================= */}

        <section className="loan-hero">
          <div className="loan-container loan-hero-grid">

            {/* HERO CONTENT */}

            <div className="loan-hero-content">

              <div className="loan-eyebrow">
                <span>🎓</span>
                EDUCATION LOAN
              </div>

              <h1>
                Your Dreams Deserve
                <span> Financial Support</span>
              </h1>

              <p className="loan-hero-description">
                An education loan can help you manage tuition fees,
                accommodation, books and other education-related expenses.
                Take the next step towards a brighter future.
              </p>

              <div className="loan-hero-actions">

                {/* CONTACT US */}

                <button
                  type="button"
                  className="loan-primary-btn"
                  onClick={goToContact}
                >
                  Contact Us
                  <span>→</span>
                </button>

                {/* LEARN MORE */}

                <button
                  type="button"
                  className="loan-outline-btn"
                  onClick={scrollToInfo}
                >
                  Learn More
                  <span>↓</span>
                </button>

              </div>

              <div className="loan-trust-points">

                <div className="loan-trust-item">
                  <span className="trust-icon trust-green">
                    ✓
                  </span>

                  <span>
                    Trusted Guidance
                  </span>
                </div>

                <div className="loan-trust-item">
                  <span className="trust-icon trust-purple">
                    ✦
                  </span>

                  <span>
                    Expert Support
                  </span>
                </div>

                <div className="loan-trust-item">
                  <span className="trust-icon trust-orange">
                    ★
                  </span>

                  <span>
                    Multiple Options
                  </span>
                </div>

              </div>

            </div>


            {/* HERO IMAGE */}

            <div className="loan-hero-visual">

              <div className="loan-visual-circle circle-one"></div>

              <div className="loan-visual-circle circle-two"></div>

              <div className="loan-hero-image-wrapper">

                <img
                  src={loanHero}
                  alt="Student exploring education loan support"
                  className="loan-hero-image"
                />

              </div>


              {/* COVERAGE CARD */}

              <div className="loan-coverage-card">

                <div className="coverage-title">
                  <span className="coverage-graduation">
                    🎓
                  </span>

                  <strong>
                    Education Loan Covers
                  </strong>
                </div>

                <div className="coverage-item">
                  <span>✓</span>
                  Tuition Fees
                </div>

                <div className="coverage-item">
                  <span>✓</span>
                  Accommodation
                </div>

                <div className="coverage-item">
                  <span>✓</span>
                  Books & Equipment
                </div>

                <div className="coverage-item">
                  <span>✓</span>
                  Other Eligible Expenses
                </div>

              </div>


              {/* DECORATIVE TEXT */}

              <div className="loan-handwriting">
                Invest in
                <br />
                Your Future

                <div className="handwriting-line"></div>
              </div>

            </div>

          </div>
        </section>


        {/* ================= BENEFITS ================= */}

        <section
          className="loan-section loan-benefits-section"
          id="education-loan-info"
        >

          <div className="loan-container">

            <div className="loan-section-intro">

              <div>

                <span className="loan-section-label">
                  WHY CHOOSE AN EDUCATION LOAN?
                </span>

                <h2>
                  Support for Your Educational Journey
                </h2>

                <p>
                  An education loan can provide financial support
                  for eligible education expenses and help students
                  focus on their studies.
                </p>

              </div>


              <div className="loan-intro-note">

                <span>💡</span>

                <p>
                  Loan benefits and coverage depend on the lender
                  and applicable terms.
                </p>

              </div>

            </div>


            <div className="loan-benefit-grid">

              <div className="loan-benefit-card benefit-green">

                <div className="benefit-icon">
                  🎓
                </div>

                <h3>
                  Tuition Fees
                </h3>

                <p>
                  Financial support for eligible tuition and
                  academic expenses.
                </p>

                <div className="benefit-arrow">
                  →
                </div>

              </div>


              <div className="loan-benefit-card benefit-purple">

                <div className="benefit-icon">
                  🏠
                </div>

                <h3>
                  Accommodation
                </h3>

                <p>
                  Support for eligible hostel or
                  accommodation-related expenses.
                </p>

                <div className="benefit-arrow">
                  →
                </div>

              </div>


              <div className="loan-benefit-card benefit-orange">

                <div className="benefit-icon">
                  📚
                </div>

                <h3>
                  Books & Equipment
                </h3>

                <p>
                  Help with books, study materials and
                  required equipment.
                </p>

                <div className="benefit-arrow">
                  →
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ELIGIBILITY ================= */}

        <section className="loan-section loan-eligibility-section">

          <div className="loan-container loan-two-column">

            <div className="loan-eligibility-content">

              <span className="loan-section-label">
                ELIGIBILITY
              </span>

              <h2>
                Who Can Apply?
              </h2>

              <p>
                Education loan eligibility depends on the lender,
                course, institution and individual applicant
                requirements.
              </p>


              <div className="loan-eligibility-illustration">

                <div className="eligibility-books">

                  <div className="eligibility-book book-blue"></div>

                  <div className="eligibility-book book-white"></div>

                  <div className="eligibility-book book-green"></div>

                </div>

                <div className="eligibility-cap">
                  🎓
                </div>

                <div className="eligibility-rupee">
                  ₹
                </div>

                <div className="eligibility-plant">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

            </div>


            <div className="loan-check-card">

              <div className="check-card-heading">

                <span>✓</span>

                <strong>
                  General Requirements
                </strong>

              </div>


              <div className="loan-check-item">

                <span>✓</span>

                <p>
                  Admission to a recognized course or institution
                </p>

              </div>


              <div className="loan-check-item">

                <span>✓</span>

                <p>
                  Required academic documents
                </p>

              </div>


              <div className="loan-check-item">

                <span>✓</span>

                <p>
                  Applicant and co-applicant details
                </p>

              </div>


              <div className="loan-check-item">

                <span>✓</span>

                <p>
                  Required financial documentation
                </p>

              </div>


              <div className="loan-check-item">

                <span>✓</span>

                <p>
                  Other lender-specific requirements
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= DOCUMENTS ================= */}

        <section className="loan-section loan-documents-section">

          <div className="loan-container">

            <div className="loan-documents-layout">

              <div className="loan-documents-heading">

                <span className="loan-section-label">
                  DOCUMENTS
                </span>

                <h2>
                  Documents You May Need
                </h2>

                <p>
                  The exact documents can vary depending on the
                  lender, course and loan requirements.
                </p>

              </div>


              <div className="loan-document-grid">

                <div className="loan-document-card">
                  <span className="document-icon document-blue">
                    🪪
                  </span>
                  <span>
                    Identity Proof
                  </span>
                </div>


                <div className="loan-document-card">
                  <span className="document-icon document-purple">
                    📄
                  </span>
                  <span>
                    Academic Documents
                  </span>
                </div>


                <div className="loan-document-card">
                  <span className="document-icon document-green">
                    🎓
                  </span>
                  <span>
                    Admission Letter
                  </span>
                </div>


                <div className="loan-document-card">
                  <span className="document-icon document-orange">
                    💼
                  </span>
                  <span>
                    Income Documents
                  </span>
                </div>


                <div className="loan-document-card">
                  <span className="document-icon document-red">
                    🏦
                  </span>
                  <span>
                    Bank Documents
                  </span>
                </div>


                <div className="loan-document-card">
                  <span className="document-icon document-cyan">
                    📋
                  </span>
                  <span>
                    Other Required Documents
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROCESS ================= */}

        <section className="loan-section loan-process-section">

          <div className="loan-container">

            <div className="loan-process-heading">

              <span className="loan-section-label">
                PROCESS
              </span>

              <h2>
                How It Works
              </h2>

              <p>
                Getting started with an education loan can be simple.
                Follow these steps to move closer to your goal.
              </p>

            </div>


            <div className="loan-process-grid">

              <div className="loan-process-item">

                <div className="process-number">
                  01
                </div>

                <div className="process-icon">
                  🔍
                </div>

                <h3>
                  Explore
                </h3>

                <p>
                  Understand loan options, requirements and
                  eligible expenses.
                </p>

                <span className="process-arrow">
                  →
                </span>

              </div>


              <div className="loan-process-item">

                <div className="process-number">
                  02
                </div>

                <div className="process-icon">
                  ✉
                </div>

                <h3>
                  Contact Us
                </h3>

                <p>
                  Share your education loan requirements with
                  our team.
                </p>

                <span className="process-arrow">
                  →
                </span>

              </div>


              <div className="loan-process-item">

                <div className="process-number">
                  03
                </div>

                <div className="process-icon">
                  👥
                </div>

                <h3>
                  Get Guidance
                </h3>

                <p>
                  Understand the next steps based on your
                  requirements.
                </p>

                <span className="process-arrow">
                  →
                </span>

              </div>


              <div className="loan-process-item">

                <div className="process-number">
                  04
                </div>

                <div className="process-icon">
                  📋
                </div>

                <h3>
                  Apply
                </h3>

                <p>
                  Proceed with the suitable lender and
                  application process.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FAQ ================= */}

        <section className="loan-section loan-faq-section">

          <div className="loan-container">

            <div className="loan-faq-heading">

              <div>

                <span className="loan-section-label">
                  FREQUENTLY ASKED QUESTIONS
                </span>

                <h2>
                  Common Questions
                </h2>

              </div>


              <button
                type="button"
                className="faq-view-button"
                onClick={goToContact}
              >
                Need More Help? →
              </button>

            </div>


            <div className="loan-faq-list">

              {faqs.map((faq, index) => (

                <div
                  className={`loan-faq-item ${
                    openFaq === index
                      ? "faq-open"
                      : ""
                  }`}
                  key={faq.question}
                >

                  <button
                    type="button"
                    className="loan-faq-question"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index
                          ? null
                          : index
                      )
                    }
                  >

                    <span>
                      {faq.question}
                    </span>

                    <span className="faq-plus">
                      {openFaq === index
                        ? "−"
                        : "+"}
                    </span>

                  </button>


                  {openFaq === index && (

                    <div className="loan-faq-answer">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= CONTACT CTA ================= */}

        <section className="loan-contact-section">

          <div className="loan-contact-container">

            <div className="loan-contact-decoration">

              <div className="contact-book book-a"></div>

              <div className="contact-book book-b"></div>

              <div className="contact-cap">
                🎓
              </div>

              <div className="contact-plant">
                🌿
              </div>

            </div>


            <div className="loan-contact-content">

              <span className="loan-contact-label">
                NEED HELP?
              </span>

              <h2>
                Looking for an Education Loan?
              </h2>

              <p>
                Have questions about education loan options?
                Get in touch with us and share your requirements.
              </p>


              {/* CONTACT US PAGE BUTTON */}

              <button
                type="button"
                className="loan-contact-button"
                onClick={goToContact}
              >
                <span>✉</span>
                Contact Us
              </button>

            </div>
            

            <div className="loan-contact-message">

              Your Goals
              <br />

              <strong>
                Our Support
              </strong>

              <div></div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
};

export default EducationLoan;