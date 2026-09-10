import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/navbar.css";

import logo from "../assets/web-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // ================= USER =================

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch {
        return null;
      }
    }

    return null;
  });

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("careerRecommendations");
    localStorage.removeItem("assessmentData");

    setUser(null);
    setMenuOpen(false);

    window.location.href = "/";
  };

  // ================= ACTIVE LINK =================

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    if (path === "/careers") {
      return (
        location.pathname === "/careers" ||
        location.pathname.startsWith("/career/")
      );
    }

    return location.pathname === path;
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* ================= LOGO ================= */}

        <a href="/" className="navbar-logo">
          <img
            src={logo}
            alt="Educational"
            className="logo-image"
          />

          <span className="logo-text">
            Educational
          </span>
        </a>


        {/* ================= DESKTOP NAV ================= */}

        <nav className="nav-links">

          <a
            href="/"
            className={`nav-link ${
              isActive("/") ? "active" : ""
            }`}
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>

            Home
          </a>


          <a
            href="/careers"
            className={`nav-link ${
              isActive("/careers") ? "active" : ""
            }`}
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>

            Careers
          </a>


          <a
            href="/jobs"
            className={`nav-link ${
              isActive("/jobs") ? "active" : ""
            }`}
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect
                x="2"
                y="7"
                width="20"
                height="14"
                rx="2"
                ry="2"
              />

              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>

            Jobs
          </a>


          <a
            href="/education-loan"
            className={`nav-link ${
              isActive("/education-loan") ? "active" : ""
            }`}
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3L3 8l9 5 9-5-9-5z" />
              <path d="M7 11v5c0 2 2.2 4 5 4s5-2 5-4v-5" />
              <path d="M21 8v6" />
            </svg>

            Education Loan
          </a>


          <a
            href="/about"
            className={`nav-link ${
              isActive("/about") ? "active" : ""
            }`}
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />

              <line
                x1="12"
                y1="16"
                x2="12"
                y2="12"
              />

              <line
                x1="12"
                y1="8"
                x2="12.01"
                y2="8"
              />
            </svg>

            About
          </a>

        </nav>


        {/* ================= RIGHT SIDE ================= */}

        <div className="nav-right">

          {user ? (
            <>
              <span className="welcome-user">
                👋 {user.name || "User"}
              </span>

              <button
                className="logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="sign-in"
              >
                Sign In
              </a>

              <a
                href="/register"
                className="nav-button"
              >
                Create Account
              </a>
            </>
          )}

        </div>


        {/* ================= HAMBURGER ================= */}

        <button
          className={`mobile-menu-btn ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >

        <a
          href="/"
          className={`mobile-link ${
            isActive("/") ? "active" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="/careers"
          className={`mobile-link ${
            isActive("/careers") ? "active" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Careers
        </a>

        <a
          href="/jobs"
          className={`mobile-link ${
            isActive("/jobs") ? "active" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Jobs
        </a>

        <a
          href="/education-loan"
          className={`mobile-link ${
            isActive("/education-loan") ? "active" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Education Loan
        </a>

        <a
          href="/about"
          className={`mobile-link ${
            isActive("/about") ? "active" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>


        <div className="mobile-actions">

          {user ? (
            <>
              <div className="mobile-user">
                👋 Welcome, {user.name || "User"}
              </div>

              <button
                className="mobile-logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="mobile-sign-in"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </a>

              <a
                href="/register"
                className="mobile-get-started"
                onClick={() => setMenuOpen(false)}
              >
                Create Account
              </a>
            </>
          )}

        </div>

      </div>

    </header>
  );
}

export default Navbar;