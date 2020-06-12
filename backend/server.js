const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// set up express

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
//Contact Us

app.post("/api/contactUs", (req, res) => {
  const data = req.body;
  const auth = {
    auth: {
      api_key: process.env.API_KEY,
      domain: process.env.DOMAIN
    }
  };

  const transporter = nodemailer.createTransport(mg(auth));

  const mailOptions = {
    from: `${data.name} <${data.email}>`,
    to: "darrenjames.dalino@gmail.com",
    subject: `<strong>SL Roofing Query</strong>`,
    html: `<p>Name: ${data.name}</p>
        <p>Email From: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>${data.inquiry}</p>`
  };

  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
    transporter.close();
  });
});

=======
>>>>>>> 687dd4d2a25b519247a1c996b41522885773f04c
// Booking
app.post("/api/booking", (req, res) => {
  const data = req.body;
  const auth = {
    auth: {
      api_key: process.env.API_KEY,
      domain: process.env.DOMAIN
    }
  };

  const transporter = nodemailer.createTransport(mg(auth));

  const mailOptions = {
    from: `${data.name} <${data.email}>`,
    to: "darrenjames.dalino@gmail.com",
    subject: "SL Roofing Booking",
    html: `<p>Name: ${data.name}</p>
        <p>Email From: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>${data.inquiry}</p>`
  };

  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
    transporter.close();
  });
});
// set up routes
const post = require("./routes/postRoutes");
const postCategory = require("./routes/postCategoryRoute");
const userRoute = require("./routes/userRoutes");
const bookNow = require("./routes/bookNowRoutes");
const subscribe = require("./routes/subscribeRoutes");
const contactUs = require("./routes/contactUsRoutes");
app.use("/posts", post);
app.use("/postCategory", postCategory);
app.use("/api/user", userRoute);
app.use("/api/booknow", bookNow);
app.use("/api/subscribe", subscribe);
app.use("/api/contactUs", contactUs);
// set up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is runnning on port: ${PORT}`);
});
// set up db connection
const MONGODB_URL =
  "mongodb+srv://djdalino:TpW5Z6aYjCENviOt@cluster3-hngry.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  MONGODB_URL || process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  err => {
    if (err) return console.error(err);
    console.log("connected to the database!");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../build/index.html"));
  });
  app.use("/build/uploads", express.static("build/uploads"));
} else {
  app.use("/uploads", express.static("uploads"));
}
