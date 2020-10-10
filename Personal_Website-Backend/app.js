require('dotenv').config()
const express = require("express")
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const nodemailer = require("nodemailer");
app.post("/api/email", function (req, res, next) { 
    async function main() { 
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {user:process.env.EMAIL,pass:process.env.PASSWORD}
        });
        let info = await transporter.sendMail({
            from: process.env.EMAIL, 
            to: process.env.SEND_EMAIL, 
            subject: "Personal Website Contact", 
            text: 
            `
            Name of Person : ${req.body.name}
            Email of Person : ${req.body.email}
            Inquiry of person : ${req.body.text}
            `, 
        });
        console.log("Message sent: %s", info.messageId);
    }
    main().then(res.json({success:"Success"}))
})

app.listen(process.env.PORT || 3001, function () { 
    console.log("Listening on port 3001");
})