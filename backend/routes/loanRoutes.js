const express = require("express");
const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const router = express.Router();


// =====================================================
// SUBMIT EDUCATION LOAN ENQUIRY
// =====================================================

router.post("/enquiry", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      message
    } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const db = getDB();

    const enquiry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      enquiryType: "Education Loan",
      message: message.trim(),
      createdAt: new Date()
    };

    const result = await db
      .collection("loanEnquiries")
      .insertOne(enquiry);

    res.status(201).json({
      success: true,
      message: "Education loan enquiry submitted successfully",
      enquiry: {
        _id: result.insertedId,
        ...enquiry
      }
    });

  } catch (error) {
    console.error(
      "Loan enquiry error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry"
    });
  }
});


// =====================================================
// GET ALL LOAN STUDENTS
// =====================================================

router.get("/enquiries", async (req, res) => {
  try {
    const db = getDB();

    const enquiries = await db
      .collection("loanEnquiries")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    res.json({
      success: true,
      enquiries
    });

  } catch (error) {
    console.error(
      "Loan enquiries fetch error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to load loan students"
    });
  }
});


// =====================================================
// DELETE LOAN ENQUIRY
// =====================================================

router.delete("/enquiries/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid enquiry ID"
      });
    }

    const db = getDB();

    const result = await db
      .collection("loanEnquiries")
      .deleteOne({
        _id: new ObjectId(id)
      });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Loan enquiry not found"
      });
    }

    res.json({
      success: true,
      message: "Loan enquiry deleted successfully"
    });

  } catch (error) {
    console.error(
      "Loan enquiry delete error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to delete enquiry"
    });
  }
});


module.exports = router;