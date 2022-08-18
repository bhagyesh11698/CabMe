const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const postRoutes = require("./routes/posts.js");
const userRoutes = require("./routes/user.js");

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

require("./models/index");
require("./models/postMessage");
require("./models/user");


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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/posts.js")(app);
require("./routes/user.js")(app);
require("./routes/schema/user.js")(app);


mongoose.set("useFindAndModify", false);
