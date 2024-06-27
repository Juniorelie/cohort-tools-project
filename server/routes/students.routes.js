const router = require("express").Router();
const Student = require("./../models/students.models");
const {
  errorHandler,
  notFoundHandler,
} = require("../middleware/error-handling");

// Set up custom error handling middleware:

//! Those routes are prefixed with /api/students

router.get("/", async (req, res, next) => {
  // TODO
  try {
    const students = await Student.find().populate("cohort");
    res.json(students);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    linkedinUrl,
    languages,
    program,
    background,
    image,
    cohort,
    projects,
  } = req.body;
  const studentToCreate = {
    firstName,
    lastName,
    email,
    phone,
    linkedinUrl,
    languages,
    program,
    background,
    image,
    cohort,
    projects,
  };

  const createdStudent = await Student.create(studentToCreate);

  res.status(201).json(createdStudent);
  try {
  } catch (error) {
    return next(error);
  }
});

router.get("/:studentId", async (req, res, next) => {
  const { studentId } = req.params;
  const oneStudent = await Student.findOne({ _id: studentId }).populate(
    "cohort"
  );
  res.json(oneStudent);
  try {
  } catch (error) {
    return next(error);
  }
});

router.get("/cohort/:cohortId", async (req, res, next) => {
  const { cohortId } = req.params;
  const students = await Student.find({ cohort: cohortId }).populate("cohort");
  res.json(students);
  try {
  } catch (error) {
    return next(error);
  }
});

router.put("/:studentId", async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      linkedinUrl,
      languages,
      program,
      background,
      image,
      cohort,
      projects,
    } = req.body;
    const { studentId } = req.params;
    const studentToUpdate = {
      firstName,
      lastName,
      email,
      phone,
      linkedinUrl,
      languages,
      program,
      background,
      image,
      cohort,
      projects,
    };

    // Find and update
    const updatedStudent = await Student.findOneAndUpdate(
      { _id: studentId },
      studentToUpdate,
      {
        new: true,
      }
    );
    res.status(202).json(updatedStudent);
  } catch (error) {
    return next(error);
  }
});

router.delete("/:studentId", async (req, res, next) => {
  try {
    const { studentId } = req.params;
    await Student.findOneAndDelete({ _id: studentId });
    res.sendStatus(204);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
