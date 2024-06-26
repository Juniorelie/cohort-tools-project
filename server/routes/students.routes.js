const router = require("express").Router()
const Student = require("./../model/Student.model")

//! Those routes are prefixed with /api/students

router.get("/", async (req, res, next) => {
	// TODO
	try {
		const students = await Student.find()
		res.json(students)
	} catch (error) {
		console.log(error)
	}
})

module.exports = router