const router = require("express").Router();
const Student = require("./../models/students.models");

//! Those routes are prefixed with /api/students

router.get("/", async (req, res, next) => {
  // TODO
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.log(error);
  }
});

router.get("/students", (req, res) => {
  Student.find({})

    .then((students) => {
      console.log("Retrieved students ->", students);

      res.json(students);
    })

    .catch((error) => {
      console.error("Error while retrieving students ->", error);

      res.status(500).json({ error: "Failed to retrieve students" });
    });
});

module.exports = router;
