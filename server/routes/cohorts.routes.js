const router = require("express").Router();
const Cohort = require("./../models/cohorts.model");
//! Those routes are prefixed with /api/cohorts

// router.get("/", async (req, res, next) => {
//   // TODO
//   try {
//     const cohorts = await Cohort.find();
//     res.json(cohorts);
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/api/cohorts", (req, res) => {
  Cohort.find({})

    .then((cohorts) => {
      console.log("Retrieved students ->", cohorts);

      res.json(cohorts);
    })

    .catch((error) => {
      console.error("Error while retrieving cohorts ->", error);

      res.status(500).json({ error: "Failed to retrieve cohorts" });
    });
  // res.json(cohortJson);
  // res.sendFile(__dirname + "/cohorts.json");
});

module.exports = router;
