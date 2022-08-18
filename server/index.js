const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
// import dotenv from 'dotenv';

const postRoutes = require("./routes/posts.js");
const userRoutes = require("./routes/user.js");

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

// const CONNECTION_URL ="mongodb+srv://cabme:projcabme@cluster0.vlojo.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
