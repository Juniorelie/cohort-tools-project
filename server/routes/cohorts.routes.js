const router = require("express").Router()
const Cohort = require("./../model/Cohort.model")
//! Those routes are prefixed with /api/cohorts

router.get("/", async (req, res, next) => {
	// TODO
	try {
		const cohorts = await Cohort.find()
		res.json(cohorts)
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
