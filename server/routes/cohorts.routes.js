const router = require("express").Router();
const Cohort = require("./../models/cohorts.model");
//! Those routes are prefixed with /api/cohorts

router.get("/", async (req, res, next) => {
  // TODO
  const query = {};

  const { campus, program } = req.query;
  if (campus) {
    query.campus = campus;
  }
  if (program) {
    query.program = program;
  }
  try {
    const cohorts = await Cohort.find(query, {
      campus: 1,
      program: 1,
    });
    res.json(cohorts);
  } catch (error) {
    console.log(error);
  }
});

// Retrieving cohort by ID
router.get("/:cohortId", (req, res, next) => {
  Cohort.findById(req.params.cohortId)
    .then((cohort) => {
      console.log("Cohort found: ", cohort);
      res.status(200).json(cohort);
    })
    .catch((error) => {
      console.error("Error while retrieving cohort", error);
    });
});

// Creating a new cohort
router.post("/", (req, res, next) => {
  Cohort.create(req.body)
    .then((newCohort) => {
      console.log("New cohort created: ", newCohort);
      res.status(201).json(newCohort);
    })
    .catch((error) => {
      console.error("Error while creating cohort ->", error);
    });
});

// Updating cohort by ID
router.put("/:cohortId", (req, res, next) => {
  Cohort.findByIdAndUpdate(
    req.params.cohortId,
    ({
      cohortSlug,
      cohortName,
      program,
      format,
      campus,
      startDate,
      endDate,
      inProgress,
      programManager,
      leadTeacher,
      totalHours,
    } = req.body),
    { new: true }
  )
    .then((updatedCohort) => {
      console.log("Cohort updated: ", updatedCohort);
      res.status(202).json(updatedCohort);
    })
    .catch((error) => {
      console.error("Error while updating cohort: ", error);
      res.status(500);
    });
});

// Deleting cohort by ID
router.delete("/:cohortId", (req, res, next) => {
  Cohort.findByIdAndDelete(req.params.cohortId)
    .then((deletedCohort) => {
      console.log("Cohort deleted: ", deletedCohort);
      res.status(204).json(`Cohort id ${req.params.cohortId} was deleted`);
    })
    .catch((error) => {
      console.error("Error while deleting cohort: ", error);
    });
});

module.exports = router;
