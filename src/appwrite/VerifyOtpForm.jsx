app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  console.log(`Verifying OTP for email: ${email}`);
  console.log(`OTP received: ${otp}`);

  const data = otpStore[email];

  // Check if OTP requested
  if (!data) {
    console.log("❌ No OTP data found for this email");
    return res.status(400).json({ error: 'No OTP requested for this email' });
  }

  // Check if OTP expired
  if (Date.now() > data.expiresAt) {
    console.log("⏰ OTP expired");
    delete otpStore[email];
    return res.status(400).json({ error: 'OTP expired' });
  }

  // Check if OTP matches (convert both to string to be safe)
  if (data.otp !== otp.toString()) {
    console.log(`❌ Invalid OTP. Expected: ${data.otp}, Received: ${otp}`);
    return res.status(400).json({ error: 'Invalid OTP' });
  }

  // OTP is valid
  console.log("✅ OTP verified successfully");
  delete otpStore[email]; // remove OTP after successful use
  return res.status(200).json({ message: 'OTP verified' });
});
