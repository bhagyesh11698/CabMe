const mongoose = require("mongoose");
const User = mongoose.model(
    "User",
    new mongoose.Schema({
      contact: { type: String} ,
        email: { type: String, required: true },
        password: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String }
    })
);
module.exports = User;