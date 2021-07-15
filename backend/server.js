const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD

=======
>>>>>>> 8398cc07569d04b500c8dfcbe968e03275ab4ef6
const cors = require("cors");
const path = require("path");
const uploadImg = path.join(__dirname, "../uploads/");
// const db = require("./config/keys").mongoURI;
require("dotenv").config();

// set up express

const app = express();
app.use("/uploads", express.static(uploadImg));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up routes
const post = require("./routes/postRoutes");
const postCategory = require("./routes/postCategoryRoute");
const userRoute = require("./routes/userRoutes");
const bookNow = require("./routes/bookNowRoutes");
const gallery = require("./routes/gallery.routes");
const subscribe = require("./routes/subscribeRoutes");
const contactUs = require("./routes/contactUsRoutes");
app.use("/sl/api/posts", post);
app.use("/sl/api/gallery", gallery);
app.use("/sl/api/postCategory", postCategory);
app.use("/sl/api/user", userRoute);
app.use("/sl/api/booknow", bookNow);
app.use("/sl/api/subscribe", subscribe);
app.use("/sl/api/contactUs", contactUs);
// set up server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is runnning on port: ${PORT}`);
});
// set up db connection
const dbCon =
  "mongodb+srv://djdalino:TpW5Z6aYjCENviOt@cluster3-hngry.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  dbCon || process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  err => {
    if (err) return console.error(err);
    console.log("connected to the database!");
  }
);

if (process.env.NODE_ENV === "production") {
  const root = require("path").join(__dirname, "../build/");

  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
}
