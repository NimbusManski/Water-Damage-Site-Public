require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const { VerifaliaRestClient } = require('verifalia');
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "https://water-damage-site-public-api.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type", "Authorization"],
  })
);
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.static(__dirname + "/client/dist"));

const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET;



app.get("/", (req, res) => {
  res.json("Backend running");
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const verifalia = new VerifaliaRestClient({
    username: process.env.VERIFALIA_USERNAME,
    password: process.env.VERIFALIA_PASSWORD,
  });

  try {
    const result = await verifalia.emailValidations.submit(email);
    console.log(result);
    
    if (result.entries[0].status === "Success") {

      const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: "Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent: " + info.response);
      res.status(200).json("Email sent successfully");
    } else {
      res.status(400).json("Invalid email address");
    }
  } catch (error) {
    console.error("Verifalia validation error:", error);
    res.status(500).json("Error validating email address");
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
