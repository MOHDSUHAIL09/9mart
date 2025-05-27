/* eslint-env node */

const nodemailer = require('nodemailer');

// Log the raw payload for debugging
console.log('Raw Payload:', process.env.APPWRITE_FUNCTION_EVENT_DATA);

// Parse payload safely
let payload = {};
try {
  payload = JSON.parse(process.env.APPWRITE_FUNCTION_EVENT_DATA || '{}');
} catch (e) {
  console.error('❌ Error parsing payload:', e);
}

// Destructure values from payload
const { productName, price, userEmail } = payload;

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS,
  },
  secure: true, // Enforces TLS
});

// Define email options
const mailOptions = {
  from: process.env.SMTP_EMAIL,
  to: userEmail || 'fallback@email.com', // You can hardcode or use the payload value
  subject: '🛒 Order Confirmation',
  text: `🛍️ A new order has been placed!\n\nProduct: ${productName}\nPrice: ₹${price}\nCustomer Email: ${userEmail}`,
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Failed to send email:', error);
  } else {
    console.log('✅ Email sent successfully:', info.response);
  }
});
