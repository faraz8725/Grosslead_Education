import { useEffect, useState } from "react";
import "./../styles/adminDashboard.css";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const [stats, setStats] = useState({
    totalAssessments: 0,
    totalStudents: 0,
    totalRecommendations: 0,
  });

  const [recentAssessments, setRecentAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/admin/stats"
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.message || "Failed to load dashboard"
        );
      }

      setStats(data.stats);
      setRecentAssessments(data.recentAssessments || []);
    } catch (err) {
      console.error("Dashboard error:", err);

      setError(
        "Dashboard data could not be loaded."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    window.location.href = "/admin/login";
  };

  return (
    <div className="admin-dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="admin-sidebar">

        <div className="admin-brand">
          <div className="admin-logo">
            🎓
          </div>

          <div>
            <h2>Educational</h2>
            <span>Admin Panel</span>
          </div>
        </div>

        <nav className="admin-nav">

          <button
            className={
              activePage === "dashboard"
                ? "active"
                : ""
            }
            onClick={() =>
              setActivePage("dashboard")
            }
          >
            📊
            <span>Dashboard</span>
          </button>

          <button
            className={
              activePage === "students"
                ? "active"
                : ""
            }
            onClick={() =>
              setActivePage("students")
            }
          >
            👥
            <span>Students</span>
          </button>

          <button
            className={
              activePage === "content"
                ? "active"
                : ""
            }
            onClick={() =>
              setActivePage("content")
            }
          >
            📝
            <span>Website Content</span>
          </button>

        </nav>

        <div className="sidebar-bottom">

          <a href="/">
            🌐
            <span>View Website</span>
          </a>

          <button onClick={handleLogout}>
            🚪
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="admin-main">

        {/* ================= DASHBOARD ================= */}

        {activePage === "dashboard" && (
          <>
            <header className="admin-header">

              <div>
                <span className="admin-label">
                  ADMIN PANEL
                </span>

                <h1>
                  Dashboard 👋
                </h1>

                <p>
                  Manage and monitor your website and students.
                </p>
              </div>

              <button
                className="refresh-btn"
                onClick={fetchDashboardData}
              >
                ↻ Refresh
              </button>

            </header>


            {error && (
              <div className="dashboard-error">
                {error}
              </div>
            )}


            {/* STATS */}

            <section className="stats-grid">

              <div className="stat-card">
                <div className="stat-icon">
                  👥
                </div>

                <div>
                  <span>Total Students</span>

                  <strong>
                    {loading
                      ? "..."
                      : stats.totalStudents}
                  </strong>

                  <small>
                    Registered students
                  </small>
                </div>
              </div>


              <div className="stat-card">
                <div className="stat-icon">
                  📝
                </div>

                <div>
                  <span>Assessments</span>

                  <strong>
                    {loading
                      ? "..."
                      : stats.totalAssessments}
                  </strong>

                  <small>
                    Completed assessments
                  </small>
                </div>
              </div>


              <div className="stat-card">
                <div className="stat-icon">
                  🎯
                </div>

                <div>
                  <span>Recommendations</span>

                  <strong>
                    {loading
                      ? "..."
                      : stats.totalRecommendations}
                  </strong>

                  <small>
                    Career recommendations
                  </small>
                </div>
              </div>

            </section>


            {/* RECENT STUDENTS */}

            <section className="dashboard-section">

              <div className="section-header">
                <div>
                  <h2>
                    Recent Students
                  </h2>

                  <p>
                    Latest assessment submissions.
                  </p>
                </div>
              </div>


              {loading ? (

                <div className="empty-state">
                  <div className="empty-icon">
                    ⏳
                  </div>

                  <h3>
                    Loading...
                  </h3>
                </div>

              ) : recentAssessments.length === 0 ? (

                <div className="empty-state">

                  <div className="empty-icon">
                    👥
                  </div>

                  <h3>
                    No students yet
                  </h3>

                  <p>
                    Student activity will appear here.
                  </p>

                </div>

              ) : (

                <div className="assessment-list">

                  {recentAssessments.map(
                    (assessment, index) => (

                      <div
                        className="assessment-row"
                        key={
                          assessment._id ||
                          index
                        }
                      >

                        <div className="student-avatar">
                          {(
                            assessment.name ||
                            "S"
                          )
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div className="assessment-info">

                          <strong>
                            {assessment.name ||
                              "Unknown Student"}
                          </strong>

                          <span>
                            {assessment.email ||
                              "Email not available"}
                          </span>

                        </div>

                        <div className="assessment-career">

                          <span>
                            Career
                          </span>

                          <strong>
                            {assessment.career ||
                              assessment.recommendation ||
                              "Not available"}
                          </strong>

                        </div>

                        <div className="assessment-date">

                          {assessment.createdAt
                            ? new Date(
                                assessment.createdAt
                              ).toLocaleDateString()
                            : "—"}

                        </div>

                      </div>

                    )
                  )}

                </div>

              )}

            </section>
          </>
        )}


        {/* ================= STUDENTS ================= */}

        {activePage === "students" && (
          <section className="admin-page">

            <header className="admin-header">
              <div>
                <span className="admin-label">
                  STUDENTS
                </span>

                <h1>
                  Students
                </h1>

                <p>
                  View basic information about registered students.
                </p>
              </div>
            </header>

            <div className="content-card">

              <h2>
                Student Management
              </h2>

              <p>
                View student names, email addresses,
                selected courses, and last login activity.
              </p>

              <div className="coming-soon">
                👥

                <h3>
                  Student Data
                </h3>

                <p>
                  Student information will automatically
                  appear here once connected to the backend.
                </p>

              </div>

            </div>

          </section>
        )}


        {/* ================= WEBSITE CONTENT ================= */}

        {activePage === "content" && (
          <section className="admin-page">

            <header className="admin-header">
              <div>
                <span className="admin-label">
                  WEBSITE
                </span>

                <h1>
                  Website Content
                </h1>

                <p>
                  Manage your website content from this section.
                </p>
              </div>
            </header>


            <div className="content-grid">

              {/* CAREERS */}

              <div className="content-card">

                <div className="content-icon">
                  🎓
                </div>

                <h2>
                  Career Details
                </h2>

                <p>
                  Manage courses and career information
                  displayed on the Careers page.
                </p>

                <button className="content-btn">
                  Manage Careers
                </button>

              </div>


              {/* JOBS */}

              <div className="content-card">

                <div className="content-icon">
                  💼
                </div>

                <h2>
                  Jobs
                </h2>

                <p>
                  Add, edit, and delete jobs available
                  on the website.
                </p>

                <button className="content-btn">
                  Manage Jobs
                </button>

              </div>


              {/* ABOUT */}

              <div className="content-card">

                <div className="content-icon">
                  ℹ️
                </div>

                <h2>
                  About
                </h2>

                <p>
                  Update the information displayed
                  on the About page.
                </p>

                <button className="content-btn">
                  Edit About
                </button>

              </div>


              {/* IMAGES */}

              <div className="content-card">

                <div className="content-icon">
                  🖼️
                </div>

                <h2>
                  Website Images
                </h2>

                <p>
                  Manage images used throughout
                  the website.
                </p>

                <button className="content-btn">
                  Manage Images
                </button>

              </div>

            </div>

          </section>
        )}

      </main>

    </div>
  );
}

export default AdminDashboard;