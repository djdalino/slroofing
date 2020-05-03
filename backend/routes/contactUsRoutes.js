const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  const data = req.body;

  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "darrenjames.dalino@gmail.com",
      pass: "Akosidj01",
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
      response.json(err);
    } else {
      response.json("success");
    }
    smtpTransport.close();
  });
});

module.exports = router;
