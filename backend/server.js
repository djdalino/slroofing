const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// set up express

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
//Contact Us
app.post("/api/contactUs", (req, res) => {
  const data = req.body;

  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: "darrenjames.dalino@gmail.com",
        clientId: "",
        clientSecret: "",
        refreshToken: "",
      }),
    },
  });

  const mailOptions = {
    from: data.email,
    to: "darrenajames.dalino@gmail.com",
    subject: "contact us",
    html: `<p>${data.name}</p>
        <p>${data.email}</p>
        <p>${data.phone}</p>
        <p>${data.message}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      response.send("success");
    }
    smtpTransport.close();
  });
});
// set up routes
const post = require("./routes/postRoutes");
const postCategory = require("./routes/postCategoryRoute");
const userRoute = require("./routes/userRoutes");
const bookNow = require("./routes/bookNowRoutes");
app.use("/posts", post);
app.use("/postCategory", postCategory);
app.use("/api/user", userRoute);
app.use("/api/booknow", bookNow);
// set up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is runnning on port: ${PORT}`);
});
// set up db connection
const MONGODB_URI =
  "mongodb+srv://djdalino:TpW5Z6aYjCENviOt@cluster3-hngry.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  process.env.MONGODB_URI || MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.error(err);
    console.log("connected to the database!");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
