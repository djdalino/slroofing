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
app.use("/uploads", express.static("uploads"));
app.use(express.json());
//Contact Us

app.post("/api/contactUs", (req, res) => {
  const data = req.body;
  const auth = {
    auth: {
      api_key: "c7d146ec9510c2f254238ba8d160a369-0afbfc6c-4aa79fb5",
      domain: "sandboxd5fa3cbefeb84afc95cd6693afc5eb68.mailgun.org",
    },
  };

  const transporter = nodemailer.createTransport(mg(auth));

  const mailOptions = {
    from: `${data.name} <${data.email}>`,
    to: "darrenjames.dalino@gmail.com",
    subject: `<strong>SL Roofing Query</strong>`,
    html: `<p>Name: ${data.name}</p>
        <p>Email From: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>${data.inquiry}</p>`,
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

// Booking
app.post("/api/booking", (req, res) => {
  const data = req.body;
  const auth = {
    auth: {
      api_key: "c7d146ec9510c2f254238ba8d160a369-0afbfc6c-4aa79fb5",
      domain: "sandboxd5fa3cbefeb84afc95cd6693afc5eb68.mailgun.org",
    },
  };

  const transporter = nodemailer.createTransport(mg(auth));

  const mailOptions = {
    from: `${data.name} <${data.email}>`,
    to: "darrenjames.dalino@gmail.com",
    subject: "SL Roofing Booking",
    html: `<p>Name: ${data.name}</p>
        <p>Email From: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>${data.inquiry}</p>`,
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
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "build", "index.html"), function (
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
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
