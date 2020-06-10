const router = require("express").Router();
const Contact = require("../models/contactUsModel");
const nodemailer = require("nodemailer");
router.get("/", async (req, res) => {
  const contact = await Contact.find();
  res.send(contact);
});
router.post("/", async (req, res) => {
  const data = req.body;
  const contact = new Contact({
    name: data.name,
    email: data.email,
    phone: data.phone,
    inquiry: data.inquiry,
  });

  try {
    const savedContact = await contact.save();

    const auth = {
      auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN,
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
    res.json(savedContact);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
