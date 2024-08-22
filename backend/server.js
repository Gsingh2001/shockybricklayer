const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors package
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all origins

// Configure Nodemailer with Zoho SMTP settings
const transporter = nodemailer.createTransport({
  service: 'Zoho',
  auth: {
    user: process.env.EMAIL_USER, // Your Zoho email address from environment variable
    pass: process.env.EMAIL_PASS  // Your Zoho email password from environment variable
  }
});

// Helper function to send email
const sendEmail = (data, type) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER_TO, // Email recipient
    subject: type === 'form' ? 'New Contact Form Submission' : 'New Quote Request',
    html: `<p><strong>Name:</strong> ${data.name}</p>
           <p><strong>Email:</strong> ${data.email}</p>
           <p><strong>Phone:</strong> ${data.phone}</p>
           <p><strong>Message:</strong> ${data.message}</p>
           ${type === 'quote' ? `
           <p><strong>Type of Work:</strong> ${data.workType}</p>
           <p><strong>Expected Work Date:</strong> ${data.workDate}</p>
           <p><strong>Additional Information:</strong> ${data.additionalInfo}</p>` : ''}
          `
  };

  return transporter.sendMail(mailOptions);
};

// API endpoint to handle contact form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Send email
  sendEmail(formData, 'form')
    .then(() => {
      res.status(200).json({ message: 'Form submitted successfully!' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error submitting form.' });
    });
});

// API endpoint to handle quote requests
app.post('/submit-quote', (req, res) => {
  const quoteData = req.body;

  // Send email
  sendEmail(quoteData, 'quote')
    .then(() => {
      res.status(200).json({ message: 'Quote request submitted successfully!' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error submitting quote request.' });
    });
});




// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
