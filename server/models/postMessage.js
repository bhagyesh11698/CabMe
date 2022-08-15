const  mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  price: Number,
  seats: Number,
  origin: [String],
  destination: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;