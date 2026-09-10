require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/db");

const assessmentRoutes = require("./routes/assessmentRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const careerRoutes = require("./routes/careerRoutes");
const loanRoutes = require("./routes/loanRoutes");

const app = express();

// ========================================
// PORT
// ========================================

const PORT = process.env.PORT || 5000;

// ========================================
// CORS
// ========================================

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://educational-mu.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without an origin
      // (Postman, server-to-server requests, etc.)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow Vercel preview deployments
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ========================================
// MIDDLEWARE
// ========================================

app.use(express.json());

// ========================================
// SERVER TEST
// ========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Educational backend is running!",
  });
});

// ========================================
// ROUTES
// ========================================

// Student Assessment
app.use(
  "/api/assessment",
  assessmentRoutes
);

app.use("/api/admin/careers", careerRoutes);

// Common Login
app.use(
  "/api/auth",
  authRoutes
);

// Admin Dashboard
app.use(
  "/api/admin",
  adminRoutes
);

app.use("/api/loan", loanRoutes);

// ========================================
// START SERVER
// ========================================

connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(
      "Server startup failed:",
      error.message
    );

    process.exit(1);
  });