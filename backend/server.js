require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/db");

const assessmentRoutes = require("./routes/assessmentRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

const PORT = 5000;


// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());

app.use(express.json());


// ========================================
// SERVER TEST
// ========================================

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Educational backend is running!"
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


// ========================================
// START SERVER
// ========================================

connectDB()
  .then(() => {

    app.listen(PORT, () => {

      console.log(
        `Server running on http://localhost:${PORT}`
      );

    });

  })
  .catch((error) => {

    console.error(
      "Server startup failed:",
      error.message
    );

  });