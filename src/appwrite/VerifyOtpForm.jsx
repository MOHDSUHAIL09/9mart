import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  // Send OTP
  const requestOtp = async () => {
    setError('');
    setLoading(true);
    try {
      if (!name.trim() || !password.trim() || !email.trim()) {
        throw new Error("Please fill all fields");
      }

      const res = await fetch('http://localhost:4000/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error === 'User already exists') {
          throw new Error('You are already signed up. Please log in.');
        }
        throw new Error(data.error || 'Failed to send OTP');
      }

      setOtpSent(true);
      setStep(2);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Resend OTP
  const resendOtp = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:4000/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to resend OTP');
      }

      setError('OTP resent to your email.');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Verify OTP and Sign Up
  const verifyOtpAndCreateAccount = async () => {
    setError('');
    setLoading(true);
    try {
      if (!otp.trim()) {
        throw new Error("Please enter OTP");
      }

      const verifyRes = await fetch('http://localhost:4000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await verifyRes.json();

      if (!verifyRes.ok) {
        throw new Error(data.error || 'OTP verification failed');
      }

      // OTP verified, create account in Appwrite
      await authService.createAccount({ email, password, name });

      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login(userData));
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {step === 1 && (
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={requestOtp} disabled={loading}>
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            required
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={verifyOtpAndCreateAccount} disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP & Sign Up'}
          </button>
          <button onClick={resendOtp} disabled={loading} style={{ marginLeft: '10px' }}>
            {loading ? 'Resending...' : 'Resend OTP'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Signup;
