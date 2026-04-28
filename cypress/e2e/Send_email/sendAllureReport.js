// sendAllureReport.js
const nodemailer = require("nodemailer");
const fs = require("fs");
const archiver = require("archiver");
const path = require("path");
const tar = require("tar");

// === CONFIG ===
const emailConfig = {
  from: "dcrtesting16@gmail.com", // Sender
  to: "muhammaduzairkhannn277@gmail.com",    // Receiver
  subject: "Allure Report",
  text: "Attached is the Allure test report.",
};

const smtpConfig = {
  service: "Gmail",
  auth: {
    user: "dcrtesting16@gmail.com",
    pass: "fpso haix vmaa homn", // App-specific password if using Gmail
  },
};

const zipReport = async () => {
  const zipPath = path.join(__dirname, "allure-report.zip");
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

// Use tar to create a .tar.gz archive instead of zip
const archivePath = path.join(__dirname, "allure-report.tar.gz");

await tar.c(
    {
        gzip: true,
        file: archivePath,
        cwd: path.join(__dirname, "allure-report"),
    },
    ["."]
);

return archivePath;
};

const sendEmail = async () => {
  try {
    const zipPath = await zipReport();

    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      ...emailConfig,
      attachments: [
        {
          filename: "allure-report.zip",
          path: zipPath,
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
  } catch (err) {
    console.error("❌ Failed to send email:", err);
  }
};

sendEmail();
