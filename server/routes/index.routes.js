const router = require("express").Router()

//! Those routes are prefixed with /api

router.use("/cohorts", require("./cohorts.routes"))
router.use("/students", require("./students.routes"))

module.exports = router
