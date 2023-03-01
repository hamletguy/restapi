const express = require("express");

const router = express.Router();
const userModel = require("../models/User");
// POST ROUTE
router.post("/", async (req, res) => {
  const newUser = { name: "New User", age: 22, favFood: ["Pasta"] };
  try {
    const user = new userModel(newUser);
    const savedUser = await user.save();
    res.json(savedUser);
    console.log(savedUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
