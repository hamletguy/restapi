const express = require("express");
const router = express.Router();
const userModel = require("../models/User");

//The pus request
router.put("/", async (req, res) => {
  try {
    console.log("first");
    const EditUser = await userModel.findByIdAndUpdate(
      "63fa37e9a1a5d287d39f7d64",
      {
        name: "New User",
      }
    );
    console.log(EditUser);
    res.json(await userModel.find());
    console.log("first");
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
