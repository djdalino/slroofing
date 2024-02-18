const router = require("express").Router();
const Contact = require("../models/contactUsModel");
const nodemailer = require("nodemailer");
const { google } = require("googleapis")


const CLIENT_ID = '32680568370-7m3v9f6n51pfumfo7nv73o8cn7mjagmd.apps.googleusercontent.com'
const CLIENT_SECRET ='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'
const REFRESH_TOKEN =`1//04MIOg0kboIEACgYIARAAGAQSNwF-L9IrrWuS1tLTbEmU40Aq_4OVIL5JhWp6wZ7UCrN5VfGbebL2Y2gzE6B9jNd2_qY6HQlqr_c`;

const MY_EMAIL = `slroofingus@gmail.com`;
const REDIRECT_URL = 'https://developers.google.com/oauthplayground/'
const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message"
}
const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => {
      if (key.toLowerCase() !== 'subject' && val) {
        return (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`);
      }
      return str;
    }, ""
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) => {
      if (key.toLowerCase() !== 'subject' && val) {
        return (str += `<h2 style="color: #2a2a2a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;margin-bottom:0">${CONTACT_MESSAGE_FIELDS[key]}:</h2><p style="color: #2a2a2a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;" align="left">${val}</p>`);
      }
      return str;
    }, ""
  );

  return {
    text: stringData,
    html: `<!doctypehtml><title></title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="IE=edge"http-equiv=X-UA-Compatible><style>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{margin-bottom:24px;padding:20px;border:1px dashed #ccc}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:0}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}div[style*="margin: 16px 0;"]{margin:0!important}</style><body style=margin:0!important;padding:0!important;background:#fff><div style=display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden></div><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td class=section-padding style="padding:10px 15px 30px 15px"align=center bgcolor=#ffffff><table border=0 cellpadding=0 cellspacing=0 width=100% class=responsive-table style=max-width:500px><tr><td><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td class="message-content padding"style=padding:0;font-size:16px;line-height:25px;color:#232323><h1 style="text-color:#0096FF;text-align:center;font-size:48px;margin-bottom:12px;">SL ROOFING AND RENOVATION</h1><div class="form-container" style="margin-top:12px;padding: 0 20px 0 20px;">${htmlData}</div></table></table></table></table>`
  }
}

async function sendEmail({name, email, subject, message}){

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

const accessToken = await oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: MY_EMAIL,
        accessToken,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN
    }
});
    const data = {
      name,
      email,
      subject,
      message
    }

const mailOptions = {
      from: {
        name: 'SL Roofing Inquiry',
        address: MY_EMAIL
      },
      to: ['darrenjames.dalino@gmail.com'],
      subject,
      ...generateEmailContent(data)
    };
  //   const mail_configs ={
      // from: {
      //   name: 'SL Roofing Inquiry',
      //   address: 'slroofingus@gmail.com'
      // },
      // to: ['darrenjames.dalino@gmail.com'],
      // subject,
      // ...generateEmailContent(data)
  //   }

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log('Error occurred:', error);
      }
      console.log('Email sent:', info.response);
  });

  // return new Promise((resolve, reject) => {
  //   let transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     host:'smtp.gmail.com',
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: 'slroofingus@gmail.com',
  //       pass: 'qwmh znjq doaq xlkq'
  //     }
  //   })
  //   const data = {
  //     name,
  //     email,
  //     subject,
  //     message
  //   }

  //   const mail_configs ={
  //     from: {
  //       name: 'SL Roofing Inquiry',
  //       address: 'slroofingus@gmail.com'
  //     },
  //     to: ['darrenjames.dalino@gmail.com'],
  //     subject,
  //     ...generateEmailContent(data)
  //   }

  //   transporter.sendMail(mail_configs, function (err, info) {
  //     if(err) {
  //       console.log({err})
  //       return reject({message: 'error sending email'})
  //     }

  //     return resolve({message: 'email sent'})
  //   })
  // })
}
router.get("/", async (req, res) => {
  const contact = await Contact.find().sort({ createdAt: -1 });
  res.json(contact);
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
    const emailData = {
      name: data.name,
      email: data.email,
      subject: `New contact message from ${data.name}`,
      message: data.inquiry
    }
    sendEmail(emailData).then(response => console.log(response))
    .catch(error => console.error(error));

    res.json(savedContact);
    // const auth = {
    //   auth: {
    //     api_key: process.env.API_KEY,
    //     domain: process.env.DOMAIN,
    //   },
    // };

    // const transporter = nodemailer.createTransport(mg(auth));

    // const mailOptions = {
    //   from: `${data.name} <${data.email}>`,
    //   to: "darrenjames.dalino@gmail.com",
    //   subject: `<strong>SL Roofing Query</strong>`,
    //   html: `<p>Name: ${data.name}</p>
    //       <p>Email From: ${data.email}</p>
    //       <p>Phone: ${data.phone}</p>
    //       <p>${data.inquiry}</p>`,
    // };

    // transporter.sendMail(mailOptions, (err, response) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("success");
    //   }
    //   transporter.close();
    // });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
