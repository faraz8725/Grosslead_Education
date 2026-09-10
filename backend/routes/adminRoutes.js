const express = require("express");
const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const router = express.Router();


// =====================================================
// ADMIN DASHBOARD STATS
// =====================================================

router.get("/stats", async (req, res) => {
  try {
    const db = getDB();

    const assessmentsCollection =
      db.collection("assessments");


    // -------------------------------------------------
    // TOTAL ASSESSMENTS
    // -------------------------------------------------

    const totalAssessments =
      await assessmentsCollection.countDocuments();


    // -------------------------------------------------
    // TOTAL STUDENTS
    // One student = one unique email
    // -------------------------------------------------

    const students =
      await assessmentsCollection
        .aggregate([
          {
            $match: {
              email: {
                $exists: true,
                $ne: ""
              }
            }
          },
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


    // -------------------------------------------------
    // TOTAL RECOMMENDATIONS
    // AI recommendations array me save ho rahi hain
    // -------------------------------------------------

    const recommendationResult =
      await assessmentsCollection
        .aggregate([
          {
            $match: {
              recommendations: {
                $exists: true,
                $type: "array"
              }
            }
          },
          {
            $project: {
              count: {
                $size: "$recommendations"
              }
            }
          },
          {
            $group: {
              _id: null,
              total: {
                $sum: "$count"
              }
            }
          }
        ])
        .toArray();

    const totalRecommendations =
      recommendationResult.length > 0
        ? recommendationResult[0].total
        : 0;


    // -------------------------------------------------
    // RECENT ASSESSMENTS
    // -------------------------------------------------

    const recentAssessments =
      await assessmentsCollection
        .find({})
        .sort({
          createdAt: -1
        })
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


// =====================================================
// GET STUDENTS
// =====================================================
//
// Students assessment complete karenge to unka data
// assessments collection me already save ho raha hai.
//
// Same email ki multiple assessments ho sakti hain,
// isliye har email ka latest record show karenge.
// =====================================================

router.get("/students", async (req, res) => {
  try {

    const db = getDB();

    const students =
      await db
        .collection("assessments")
        .aggregate([

          // Valid email wale records
          {
            $match: {
              email: {
                $exists: true,
                $ne: ""
              }
            }
          },

          // Latest assessment first
          {
            $sort: {
              createdAt: -1
            }
          },

          // Same email ka latest record
          {
            $group: {
              _id: "$email",
              student: {
                $first: "$$ROOT"
              }
            }
          },

          // Student object ko root banana
          {
            $replaceRoot: {
              newRoot: "$student"
            }
          },

          // Latest students first
          {
            $sort: {
              createdAt: -1
            }
          }

        ])
        .toArray();


    res.json({
      success: true,
      students
    });

  } catch (error) {

    console.error(
      "Students fetch error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to load students"
    });
  }
});


// =====================================================
// GET SINGLE STUDENT
// =====================================================

router.get("/students/:id", async (req, res) => {
  try {

    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID"
      });
    }

    const db = getDB();

    const student =
      await db
        .collection("assessments")
        .findOne({
          _id: new ObjectId(req.params.id)
        });


    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }


    res.json({
      success: true,
      student
    });

  } catch (error) {

    console.error(
      "Student fetch error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to load student"
    });
  }
});


// =====================================================
// DELETE STUDENT ASSESSMENT
// =====================================================
//
// Ye assessment record delete karega.
// =====================================================

router.delete("/students/:id", async (req, res) => {
  try {

    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID"
      });
    }

    const db = getDB();

    const result =
      await db
        .collection("assessments")
        .deleteOne({
          _id: new ObjectId(req.params.id)
        });


    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Student record not found"
      });
    }


    res.json({
      success: true,
      message:
        "Student record deleted successfully"
    });

  } catch (error) {

    console.error(
      "Student delete error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to delete student"
    });
  }
});


// =====================================================
// GET GOVERNMENT JOBS
// =====================================================

router.get("/jobs/government", async (req, res) => {
  try {

    const db = getDB();

    const jobs =
      await db
        .collection("governmentJobs")
        .find({})
        .sort({
          createdAt: -1
        })
        .toArray();


    res.json({
      success: true,
      jobs
    });

  } catch (error) {

    console.error(
      "Government jobs fetch error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to load government jobs"
    });
  }
});


// =====================================================
// ADD GOVERNMENT JOB
// =====================================================

router.post("/jobs/government", async (req, res) => {
  try {

    const {
      title,
      organization,
      location,
      qualification,
      lastDate,
      description,
      applyLink
    } = req.body;


    if (
      !title ||
      !organization ||
      !location ||
      !qualification
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Title, organization, location and qualification are required"
      });
    }


    const db = getDB();


    const job = {

      title:
        title.trim(),

      organization:
        organization.trim(),

      location:
        location.trim(),

      qualification:
        qualification.trim(),

      lastDate:
        lastDate
          ? lastDate.trim()
          : "",

      description:
        description
          ? description.trim()
          : "",

      applyLink:
        applyLink
          ? applyLink.trim()
          : "",

      type:
        "government",

      createdAt:
        new Date(),

      updatedAt:
        new Date()
    };


    const result =
      await db
        .collection("governmentJobs")
        .insertOne(job);


    res.status(201).json({

      success: true,

      message:
        "Government job added successfully",

      job: {
        _id:
          result.insertedId,

        ...job
      }

    });

  } catch (error) {

    console.error(
      "Government job add error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to add government job"
    });
  }
});


// =====================================================
// UPDATE GOVERNMENT JOB
// =====================================================

router.put(
  "/jobs/government/:id",
  async (req, res) => {

    try {

      if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid job ID"
        });
      }


      const {
        title,
        organization,
        location,
        qualification,
        lastDate,
        description,
        applyLink
      } = req.body;


      const db = getDB();


      const updatedJob = {

        title:
          title?.trim() || "",

        organization:
          organization?.trim() || "",

        location:
          location?.trim() || "",

        qualification:
          qualification?.trim() || "",

        lastDate:
          lastDate?.trim() || "",

        description:
          description?.trim() || "",

        applyLink:
          applyLink?.trim() || "",

        type:
          "government",

        updatedAt:
          new Date()
      };


      const result =
        await db
          .collection("governmentJobs")
          .updateOne(

            {
              _id:
                new ObjectId(
                  req.params.id
                )
            },

            {
              $set:
                updatedJob
            }

          );


      if (result.matchedCount === 0) {

        return res.status(404).json({
          success: false,
          message:
            "Government job not found"
        });

      }


      res.json({
        success: true,
        message:
          "Government job updated successfully"
      });

    } catch (error) {

      console.error(
        "Government job update error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update government job"
      });
    }
  }
);


// =====================================================
// DELETE GOVERNMENT JOB
// =====================================================

router.delete(
  "/jobs/government/:id",
  async (req, res) => {

    try {

      if (!ObjectId.isValid(req.params.id)) {

        return res.status(400).json({
          success: false,
          message: "Invalid job ID"
        });

      }


      const db = getDB();


      const result =
        await db
          .collection("governmentJobs")
          .deleteOne({

            _id:
              new ObjectId(
                req.params.id
              )

          });


      if (result.deletedCount === 0) {

        return res.status(404).json({
          success: false,
          message:
            "Government job not found"
        });

      }


      res.json({
        success: true,
        message:
          "Government job deleted successfully"
      });

    } catch (error) {

      console.error(
        "Government job delete error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete government job"
      });
    }
  }
);


// =====================================================
// GET PRIVATE JOBS
// =====================================================

router.get("/jobs/private", async (req, res) => {
  try {

    const db = getDB();

    const jobs =
      await db
        .collection("privateJobs")
        .find({})
        .sort({
          createdAt: -1
        })
        .toArray();


    res.json({
      success: true,
      jobs
    });

  } catch (error) {

    console.error(
      "Private jobs fetch error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to load private jobs"
    });
  }
});


// =====================================================
// ADD PRIVATE JOB
// =====================================================

router.post("/jobs/private", async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      salary,
      experience,
      type,
      skills,
      technologies,
      qualification,
      lastDate,
      description,
      applyLink,
      icon
    } = req.body;

    if (
      !title ||
      !company ||
      !location
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Title, company and location are required"
      });
    }

    const db = getDB();

    const job = {
      title: title.trim(),
      company: company.trim(),
      location: location.trim(),

      salary: salary?.trim() || "",
      experience: experience?.trim() || "",
      type: type?.trim() || "Full Time",

      skills: Array.isArray(skills)
        ? skills
        : [],

      technologies: Array.isArray(technologies)
        ? technologies
        : [],

      qualification:
        qualification?.trim() || "",

      lastDate:
        lastDate?.trim() || "",

      description:
        description?.trim() || "",

      applyLink:
        applyLink?.trim() || "",

      icon:
        icon?.trim() || "💼",

      typeCategory: "private",

      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result =
      await db
        .collection("privateJobs")
        .insertOne(job);

    res.status(201).json({
      success: true,
      message:
        "Private job added successfully",

      job: {
        _id: result.insertedId,
        ...job
      }
    });

  } catch (error) {

    console.error(
      "Private job add error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to add private job"
    });
  }
});

// =====================================================
// UPDATE PRIVATE JOB
// =====================================================

router.put(
  "/jobs/private/:id",
  async (req, res) => {
    try {

      if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid job ID"
        });
      }

      const {
        title,
        company,
        location,
        salary,
        experience,
        type,
        skills,
        technologies,
        qualification,
        lastDate,
        description,
        applyLink,
        icon
      } = req.body;

      const db = getDB();

      const updatedJob = {
        title: title?.trim() || "",

        company:
          company?.trim() || "",

        location:
          location?.trim() || "",

        salary:
          salary?.trim() || "",

        experience:
          experience?.trim() || "",

        type:
          type?.trim() || "Full Time",

        skills:
          Array.isArray(skills)
            ? skills
            : [],

        technologies:
          Array.isArray(technologies)
            ? technologies
            : [],

        qualification:
          qualification?.trim() || "",

        lastDate:
          lastDate?.trim() || "",

        description:
          description?.trim() || "",

        applyLink:
          applyLink?.trim() || "",

        icon:
          icon?.trim() || "💼",

        typeCategory: "private",

        updatedAt: new Date()
      };

      const result =
        await db
          .collection("privateJobs")
          .updateOne(
            {
              _id: new ObjectId(
                req.params.id
              )
            },
            {
              $set: updatedJob
            }
          );

      if (result.matchedCount === 0) {
        return res.status(404).json({
          success: false,
          message:
            "Private job not found"
        });
      }

      res.json({
        success: true,
        message:
          "Private job updated successfully"
      });

    } catch (error) {

      console.error(
        "Private job update error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update private job"
      });
    }
  }
);

// =====================================================
// DELETE PRIVATE JOB
// =====================================================

router.delete(
  "/jobs/private/:id",
  async (req, res) => {

    try {

      if (!ObjectId.isValid(req.params.id)) {

        return res.status(400).json({
          success: false,
          message: "Invalid job ID"
        });

      }


      const db = getDB();


      const result =
        await db
          .collection("privateJobs")
          .deleteOne({

            _id:
              new ObjectId(
                req.params.id
              )

          });


      if (result.deletedCount === 0) {

        return res.status(404).json({
          success: false,
          message:
            "Private job not found"
        });

      }


      res.json({
        success: true,
        message:
          "Private job deleted successfully"
      });

    } catch (error) {

      console.error(
        "Private job delete error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete private job"
      });
    }
  }
);


// =====================================================
// CAREER MANAGEMENT
// =====================================================


// =====================================================
// GET ALL CAREERS
// =====================================================

router.get("/careers", async (req, res) => {
  try {

    const db = getDB();


    const careers =
      await db
        .collection("careers")
        .find({})
        .sort({
          createdAt: -1
        })
        .toArray();


    res.json({
      success: true,
      careers
    });

  } catch (error) {

    console.error(
      "Career fetch error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to load careers"
    });
  }
});


// =====================================================
// ADD CAREER
// =====================================================

router.post("/careers", async (req, res) => {
  try {

    const {
      slug,
      title,
      category,
      description,
      education,
      skills,
      courses,
      roadmap
    } = req.body;


    if (
      !slug ||
      !title ||
      !category ||
      !description ||
      !education
    ) {

      return res.status(400).json({
        success: false,
        message:
          "Required career fields are missing"
      });

    }


    const db = getDB();


    const cleanSlug =
      slug
        .trim()
        .toLowerCase();


    // Check duplicate slug

    const existingCareer =
      await db
        .collection("careers")
        .findOne({
          slug: cleanSlug
        });


    if (existingCareer) {

      return res.status(400).json({
        success: false,
        message:
          "Career with this slug already exists"
      });

    }


    const career = {

      slug:
        cleanSlug,

      title:
        title.trim(),

      category:
        category.trim(),

      description:
        description.trim(),

      education:
        education.trim(),

      skills:
        Array.isArray(skills)
          ? skills
          : [],

      courses:
        Array.isArray(courses)
          ? courses
          : [],

      roadmap:
        Array.isArray(roadmap)
          ? roadmap
          : [],

      createdAt:
        new Date(),

      updatedAt:
        new Date()
    };


    const result =
      await db
        .collection("careers")
        .insertOne(career);


    res.status(201).json({

      success: true,

      message:
        "Career added successfully",

      career: {

        _id:
          result.insertedId,

        ...career

      }

    });

  } catch (error) {

    console.error(
      "Career add error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to add career"
    });
  }
});


// =====================================================
// UPDATE CAREER
// =====================================================

router.put(
  "/careers/:id",
  async (req, res) => {

    try {

      if (!ObjectId.isValid(req.params.id)) {

        return res.status(400).json({
          success: false,
          message:
            "Invalid career ID"
        });

      }


      const {
        slug,
        title,
        category,
        description,
        education,
        skills,
        courses,
        roadmap
      } = req.body;


      const db = getDB();


      const cleanSlug =
        slug
          ? slug.trim().toLowerCase()
          : "";


      // Check if another career already
      // has the same slug

      if (cleanSlug) {

        const existingCareer =
          await db
            .collection("careers")
            .findOne({

              slug:
                cleanSlug,

              _id: {
                $ne:
                  new ObjectId(
                    req.params.id
                  )
              }

            });


        if (existingCareer) {

          return res.status(400).json({
            success: false,
            message:
              "Another career already uses this slug"
          });

        }

      }


      const updatedCareer = {

        slug:
          cleanSlug,

        title:
          title?.trim() || "",

        category:
          category?.trim() || "",

        description:
          description?.trim() || "",

        education:
          education?.trim() || "",

        skills:
          Array.isArray(skills)
            ? skills
            : [],

        courses:
          Array.isArray(courses)
            ? courses
            : [],

        roadmap:
          Array.isArray(roadmap)
            ? roadmap
            : [],

        updatedAt:
          new Date()
      };


      const result =
        await db
          .collection("careers")
          .updateOne(

            {
              _id:
                new ObjectId(
                  req.params.id
                )
            },

            {
              $set:
                updatedCareer
            }

          );


      if (result.matchedCount === 0) {

        return res.status(404).json({
          success: false,
          message:
            "Career not found"
        });

      }


      res.json({
        success: true,
        message:
          "Career updated successfully"
      });

    } catch (error) {

      console.error(
        "Career update error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update career"
      });
    }
  }
);


// =====================================================
// DELETE CAREER
// =====================================================

router.delete(
  "/careers/:id",
  async (req, res) => {

    try {

      if (!ObjectId.isValid(req.params.id)) {

        return res.status(400).json({
          success: false,
          message:
            "Invalid career ID"
        });

      }


      const db = getDB();


      const result =
        await db
          .collection("careers")
          .deleteOne({

            _id:
              new ObjectId(
                req.params.id
              )

          });


      if (result.deletedCount === 0) {

        return res.status(404).json({
          success: false,
          message:
            "Career not found"
        });

      }


      res.json({
        success: true,
        message:
          "Career deleted successfully"
      });

    } catch (error) {

      console.error(
        "Career delete error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete career"
      });
    }
  }
);


// =====================================================
// EXPORT ROUTER
// =====================================================

module.exports = router;