const express = require("express");
const { getDB } = require("../config/db");

const router = express.Router();


// ========================================
// ADMIN LOGIN
// ========================================

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });

    }


    // Get database
    const db = getDB();

    const adminsCollection =
      db.collection("admins");


    // Find admin
    const admin = await adminsCollection.findOne({
      email: email
    });


    // Admin not found
    if (!admin) {

      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });

    }


    // Check password
    if (admin.password !== password) {

      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });

    }


    // Login successful
    res.json({

      success: true,

      message: "Admin login successful",

      admin: {
        id: admin._id,
        email: admin.email
      }

    });


  } catch (error) {

    console.error(
      "Admin login error:",
      error.message
    );

    res.status(500).json({

      success: false,

      message: "Admin login failed"

    });

  }

});



// ========================================
// ADMIN DASHBOARD STATS
// ========================================

router.get("/stats", async (req, res) => {

  try {

    const db = getDB();

    const assessmentsCollection =
      db.collection("assessments");


    // Total assessments
    const totalAssessments =
      await assessmentsCollection.countDocuments();


    // Total students
    const students =
      await assessmentsCollection
        .aggregate([
          {
            $group: {
              _id: "$email"
            }
          },
          {
            $count: "total"
          }
        ])
        .toArray();


    const totalStudents =
      students.length > 0
        ? students[0].total
        : 0;


    // Total recommendations
    const totalRecommendations =
      await assessmentsCollection.countDocuments({
        $or: [
          {
            career: {
              $exists: true,
              $ne: ""
            }
          },
          {
            recommendation: {
              $exists: true,
              $ne: ""
            }
          }
        ]
      });


    // Recent assessments
    const recentAssessments =
      await assessmentsCollection
        .find({})
        .sort({ createdAt: -1 })
        .limit(10)
        .toArray();


    res.json({

      success: true,

      stats: {
        totalAssessments,
        totalStudents,
        totalRecommendations
      },

      recentAssessments

    });


  } catch (error) {

    console.error(
      "Admin stats error:",
      error.message
    );

    res.status(500).json({

      success: false,

      message:
        "Failed to load admin dashboard data"

    });

  }

});


module.exports = router;