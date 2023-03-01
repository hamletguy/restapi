const express = require("express");
const router = express.Router();
const { default: mongoose } = require("mongoose");
const userModel = require("../models/User");
// GET ROUTE
router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
    console.log(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
