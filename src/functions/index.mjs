const nodemailer = require('nodemailer');

const payload = JSON.parse(process.env.APPWRITE_FUNCTION_EVENT_DATA || '{}');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS,
  },
});

const mailOptions = {
  from: process.env.SMTP_EMAIL,
  to: 'your@email.com', // Replace with your email
  subject: '🛒 New Order Confirmation',
  text: `🛍️ A new order has been placed!\n\nProduct: ${payload.productName}\nPrice: ₹${payload.price}\nCustomer: ${payload.userEmail}`,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Error sending email:', error);
  } else {
    console.log('✅ Email sent successfully:', info.response);
  }
});
