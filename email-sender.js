const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'salem.emailsender@gmail.com',
    pass: '55695105salem',
  },
});

const mailOptions = {
  from: 'salem.emailsender@gmail.com',
  to: 'hammamisalem@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error while sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
