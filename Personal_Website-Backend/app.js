require('dotenv').config()
const express = require("express")
const app = express();
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
            Name of Person : Dummy Name
            Email of Person : Dummy Email
            Inquiry of person : Dummy Text with lots of lorum ipsum ....
            `, 
        });
        console.log("Message sent: %s", info.messageId);
    }
    main().then(res.json({success:"Success"}))
})

app.listen(process.env.PORT || 3001, function () { 
    console.log("Listening on port 3001");
})