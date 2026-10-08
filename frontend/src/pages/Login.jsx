import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // const API_URL = "http://localhost:5000";
    const API_URL = import.meta.env.VITE_API_URL;

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                `${API_URL}/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email.trim(),
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                setError(
                    data.message || "Invalid email or password"
                );
                return;
            }

            // Save login information
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            localStorage.setItem("role", data.role);

            // Admin login
            if (data.role === "admin") {
                navigate("/admin/dashboard");
                return;
            }

            // Normal user login
            if (data.role === "user") {
                navigate("/");
                return;
            }

        } catch (error) {
            console.error("Login error:", error);

            setError(
                "Server se connection nahi ho pa raha. Backend check karo."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-header">
                    <h1>Welcome Back 👋</h1>

                    <p>
                        Login to continue to your account
                    </p>
                </div>

                <form onSubmit={handleLogin}>

                    <div className="input-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />
                    </div>

                    {error && (
                        <div className="login-error">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="login-btn"
                        disabled={loading}
                    >
                        {loading
                            ? "Logging in..."
                            : "Sign In"}
                    </button>

                </form>

                <div className="login-footer">
                    <p>
                        Don't have an account?
                        <span
                            onClick={() =>
                                navigate("/register")
                            }
                        >
                            {" "}Create an account
                        </span>
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Login;