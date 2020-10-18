require("dotenv").config();
const express = require("express");
var router = express.Router();
var cors = require("cors");
var bodyParser = require("body-parser");

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const nodemailer = require("nodemailer");

router.post("/", function (req, res) {
  async function main() {
    try {
      let testAccount = await nodemailer.createTestAccount();
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
      });
      let info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.SEND_EMAIL,
        subject: "Personal Website Contact",
        text: `
                    Name of Person : ${req.body.name}
                    Email of Person : ${req.body.email}
                    Inquiry of person : ${req.body.text}
                    `,
      });
      console.log("Message sent: %s", info.messageId);
      return res.json({ success: true });
    } catch (err) {
      return res.json({ success: false });
    }
  }
  main();
});

module.exports = router;
