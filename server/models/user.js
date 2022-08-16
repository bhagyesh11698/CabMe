const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    contact: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String },
    lastname: { type: String },
  })
);
module.exports = User;
