// database connection
const mongoose = require("mongoose");
const DB = process.env.DB;
const userModel = require("./models/User");

require("dotenv").config({ path: "./config/.env" });
const connect = () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connected successfully to db");
    })
    .catch((e) => {
      console.log(e.message);
    });
};
// adding data to the db
const run = async () => {
  try {
    const userAdd = await userModel.insertMany([
      { name: "John", age: 25, favFood: ["Pizza", "Sushi"] },
      { name: "Sarah", age: 30, favFood: ["Salad", "Grilled Chicken"] },
      { name: "Mike", age: 42, favFood: ["Steak", "Baked Potato"] },
      { name: "Amy", age: 21, favFood: ["Pad Thai"] },
      { name: "Emily", age: 35, favFood: ["Tacos", "Guacamole"] },
      { name: "Jack", age: 50, favFood: ["Fish and Chips"] },
      { name: "Jenny", age: 28, favFood: ["Sushi"] },
      { name: "Mark", age: 37, favFood: ["Burgers", "Fries"] },
      { name: "bou7mid", age: 29, favFood: ["mlou5ia"] },
      { name: "David", age: 31, favFood: ["Korean BBQ"] },
    ]);
    console.log(userAdd);
  } catch (error) {
    console.log(error.message);
  }
};
//Preping the data to be shown in the get request

module.exports = { connect, run };
