const express = require("express");
const router = express.Router();
const userModel = require("../models/User");

//DELETE

router.delete("/", async (req, res) => {
  try {
    const DeleteUser = await userModel.findByIdAndRemove(
      "63f52f4f30eb31220912a334"
    );
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
