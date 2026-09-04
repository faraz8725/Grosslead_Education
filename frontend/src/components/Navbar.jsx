import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Check logged-in user
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

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("careerRecommendations");
    localStorage.removeItem("assessmentData");

    setUser(null);
    setMenuOpen(false);

    window.location.href = "/";
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* ================= LOGO ================= */}

        <a href="/" className="navbar-logo">
          <div className="logo-icon-bg">
            <svg
              className="logo-icon"
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

          <span className="logo-text">
            Educational
          </span>
        </a>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="nav-links">

          {/* HOME */}

          <a
            href="/"
            className={`nav-link ${
              location.pathname === "/" ? "active" : ""
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


          {/* CAREERS */}

          <a
            href="/careers"
            className={`nav-link ${
              location.pathname === "/careers" ||
              location.pathname.startsWith("/career/")
                ? "active"
                : ""
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


          {/* JOBS */}

          <a
            href="/jobs"
            className={`nav-link ${
              location.pathname === "/jobs" ? "active" : ""
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


          {/* ABOUT */}

          <a
            href="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />

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


        {/* ================= DESKTOP RIGHT ================= */}

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


        {/* ================= MOBILE HAMBURGER ================= */}

        <button
          className={`mobile-menu-btn ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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

        {/* HOME */}

        <a
          href="/"
          className={`mobile-link ${
            location.pathname === "/" ? "active" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>


        {/* CAREERS */}

        <a
          href="/careers"
          className={`mobile-link ${
            location.pathname === "/careers" ||
            location.pathname.startsWith("/career/")
              ? "active"
              : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Careers
        </a>


        {/* JOBS */}

        <a
          href="/jobs"
          className={`mobile-link ${
            location.pathname === "/jobs" ? "active" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Jobs
        </a>


        {/* ABOUT */}

        <a
          href="/about"
          className={`mobile-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>


        {/* MOBILE ACTIONS */}

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
              >
                Sign In
              </a>

              <a
                href="/register"
                className="mobile-get-started"
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