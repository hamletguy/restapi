const { default: mongoose } = require("mongoose");
const express = require("express");
mongoose.set("strictQuery", false);
// Server creation
require("dotenv").config({ path: "./config/.env" });
const port = process.env.port || 3000;
const app = express();

app.listen(port, (e) =>
  e ? console.log(e.message) : console.log("Connected to " + port)
);
//Calling the connection to the db and adding users to the db
const { connect, run } = require("./database");

connect();
// run();
//Creating the routes
//GET
// const userModel = require("./models/User");
// app.get("/users", async (req, res) => {
//   try {
//     const users = await userModel.find();
//     res.json(users);
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send("Internal server error");
//   }
// });
const findRouter = require("./routes/Users");
app.use("/users", findRouter);

const AddUserRouter = require("./routes/AddUserRoute");
app.use("/newuser", AddUserRouter);

const EditUser = require("./routes/EditUser");
app.use("/editUser", EditUser);

const RemoveUser = require("./routes/FindOneAndDelete");
app.use("/delete", RemoveUser);
