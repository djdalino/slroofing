const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(express.json());

// set up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is runnning on port: ${PORT}`);
});

// set up routes
const post = require("./routes/postRoutes");
app.use("/posts", post);

// set up db connection
const MONGODB_URI =
  "mongodb+srv://djdalino:TpW5Z6aYjCENviOt@cluster3-hngry.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.error(err);
    console.log("connected to the database!");
  }
);
