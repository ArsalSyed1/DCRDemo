const nodemailer = require('nodemailer');
const fs = require('fs');

const reportPath = 'cypress/results/report.xml';

// Create reusable transporter object using your SMTP server
let transporter = nodemailer.createTransport({
  service: 'gmail', // Or use smtp.yourdomain.com
  auth: {
    user: 'dcrtesting16@gmail.com',
    pass: 'xvnt oous xlcu gyjg', // Use Gmail App Password, not your real password
  },
});

// Read the report file
const reportContent = fs.readFileSync(reportPath, 'utf8');

// Setup email data
let mailOptions = {
    from: '"Cypress Report" <dcrtesting16@gmail.com>',
    to: 'uzair.khan@teo-intl.com, bilal.taj@teo-intl.com, Hamza.ahmad@teo.intl.com',
    subject: 'Cypress Mocha Test Report',
    text: 'Find the Cypress test report attached.',
    attachments: [
        {
            filename: 'report.xml',
            path: reportPath,
            contentType: 'text/xml',
        },
    ],
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error sending email:', error);
  }
  console.log('Report sent: %s', info.messageId);
});
