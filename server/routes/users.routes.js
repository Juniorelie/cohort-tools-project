const router = require("express").Router();
const User = require("./../models/User.model");
//! We are prefixed by /api/users

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneUser = await User.findOne({ _id: id });
    res.json({ user: oneUser });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
