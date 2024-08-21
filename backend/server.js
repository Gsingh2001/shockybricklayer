const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the cors package
require('dotenv').config(); // To load environment variables from .env file

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

  // Read existing data
  const filePath = path.join(__dirname, 'db.json');
  let dbData = [];

  if (fs.existsSync(filePath)) {
    dbData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  // Add new data
  dbData.push(formData);

  // Write updated data to db.json
  fs.writeFileSync(filePath, JSON.stringify(dbData, null, 2));

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

  // Read existing data
  const filePath = path.join(__dirname, 'quotes-db.json');
  let quotesData = [];

  if (fs.existsSync(filePath)) {
    quotesData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  // Add new data
  quotesData.push(quoteData);

  // Write updated data to quotes-db.json
  fs.writeFileSync(filePath, JSON.stringify(quotesData, null, 2));

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

// API endpoint to get quotes
app.get('/get-quotes', (req, res) => {
  const filePath = path.join(__dirname, 'quotes-db.json');

  if (fs.existsSync(filePath)) {
    const quotesData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.status(200).json(quotesData);
  } else {
    res.status(404).json({ message: 'No quotes found.' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
