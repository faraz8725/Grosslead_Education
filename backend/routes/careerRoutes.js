const express = require("express");
const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const router = express.Router();


// ========================================
// GET ALL CAREERS
// ========================================

router.get("/", async (req, res) => {
  try {
    const db = getDB();

    const careers = await db
      .collection("careers")
      .find({})
      .sort({ title: 1 })
      .toArray();

    res.json({
      success: true,
      careers,
    });

  } catch (error) {
    console.error("Get careers error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load careers",
    });
  }
});


// ========================================
// GET SINGLE CAREER
// ========================================

router.get("/:id", async (req, res) => {
  try {
    const db = getDB();

    const { id } = req.params;

    let career;

    // MongoDB ObjectId se search
    if (ObjectId.isValid(id)) {
      career = await db
        .collection("careers")
        .findOne({
          _id: new ObjectId(id),
        });
    }

    // Agar ID nahi mila to slug se search
    if (!career) {
      career = await db
        .collection("careers")
        .findOne({
          slug: id,
        });
    }

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    res.json({
      success: true,
      career,
    });

  } catch (error) {
    console.error("Get career error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load career",
    });
  }
});


// ========================================
// ADD CAREER
// ========================================

router.post("/", async (req, res) => {
  try {
    const db = getDB();

    const {
      title,
      slug,
      category,
      icon,
      description,
      education,
      skills,
      courses,
      roadmap,
      salary,
      jobRoles,
    } = req.body;

    if (!title || !slug || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, slug and category are required",
      });
    }

    const existing = await db
      .collection("careers")
      .findOne({
        slug: slug.trim().toLowerCase(),
      });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Career with this slug already exists",
      });
    }

    const career = {
      title: title.trim(),
      slug: slug.trim().toLowerCase(),
      category: category.trim(),

      // Career card icon
      icon: icon || "🎯",

      // Main information
      description: description || "",
      education: education || "",

      // Skills
      skills: Array.isArray(skills)
        ? skills
        : [],

      // Courses
      courses: Array.isArray(courses)
        ? courses
        : [],

      // Career roadmap
      roadmap: Array.isArray(roadmap)
        ? roadmap
        : [],

      // Optional career information
      salary: salary || "",
      jobRoles: Array.isArray(jobRoles)
        ? jobRoles
        : [],

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db
      .collection("careers")
      .insertOne(career);

    res.status(201).json({
      success: true,
      message: "Career added successfully",

      career: {
        ...career,
        _id: result.insertedId,
      },
    });

  } catch (error) {
    console.error("Add career error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to add career",
    });
  }
});


// ========================================
// UPDATE CAREER
// ========================================

router.put("/:id", async (req, res) => {
  try {
    const db = getDB();

    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid career ID",
      });
    }

    const {
      title,
      slug,
      category,
      icon,
      description,
      education,
      skills,
      courses,
      roadmap,
      salary,
      jobRoles,
    } = req.body;

    const updatedCareer = {
      title: title ? title.trim() : "",
      slug: slug
        ? slug.trim().toLowerCase()
        : "",
      category: category ? category.trim() : "",

      icon: icon || "🎯",

      description: description || "",
      education: education || "",

      skills: Array.isArray(skills)
        ? skills
        : [],

      courses: Array.isArray(courses)
        ? courses
        : [],

      roadmap: Array.isArray(roadmap)
        ? roadmap
        : [],

      salary: salary || "",

      jobRoles: Array.isArray(jobRoles)
        ? jobRoles
        : [],

      updatedAt: new Date(),
    };

    const result = await db
      .collection("careers")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: updatedCareer,
        }
      );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    res.json({
      success: true,
      message: "Career updated successfully",
    });

  } catch (error) {
    console.error("Update career error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update career",
    });
  }
});


// ========================================
// DELETE CAREER
// ========================================

router.delete("/:id", async (req, res) => {
  try {
    const db = getDB();

    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid career ID",
      });
    }

    const result = await db
      .collection("careers")
      .deleteOne({
        _id: new ObjectId(id),
      });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    res.json({
      success: true,
      message: "Career deleted successfully",
    });

  } catch (error) {
    console.error("Delete career error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete career",
    });
  }
});


module.exports = router;