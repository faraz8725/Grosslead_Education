import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed"
        );
      }

      // Admin login status save
      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      // Dashboard par redirect
      navigate("/admin/dashboard");

    } catch (error) {
      console.error("Admin login error:", error);

      setError(
        error.message ||
        "Unable to connect to server."
      );

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-login-logo">
          🎓
        </div>

        <h1>
          Admin Login
        </h1>

        <p className="admin-login-subtitle">
          Login to access the Educational admin panel.
        </p>

        <form onSubmit={handleLogin}>

          <div className="admin-form-group">

            <label>
              Admin Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter admin email"
              required
            />

          </div>

          <div className="admin-form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter admin password"
              required
            />

          </div>

          {error && (
            <p className="admin-login-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="admin-login-button"
            disabled={isLoading}
          >
            {isLoading
              ? "Logging in..."
              : "Login to Dashboard →"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;