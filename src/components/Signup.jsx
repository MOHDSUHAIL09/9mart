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

  const requestOtp = async () => {
    setError('');
    setLoading(true);
    try {
      if (!name.trim() || !password.trim() || !email.trim()) {
        throw new Error('Please fill all fields');
      }

      const res = await fetch('http://localhost:4000/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to send OTP');
      }

      setStep(2);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const verifyOtpAndCreateAccount = async () => {
    setError('');
    setLoading(true);
    try {
      if (!otp.trim()) {
        throw new Error('Please enter OTP');
      }

      const verifyRes = await fetch('http://localhost:4000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      if (!verifyRes.ok) {
        const errData = await verifyRes.json();
        throw new Error(errData.error || 'OTP verification failed');
      }

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
    <div className="signup-wrapper">
      <div className="signup-left">
        <h2>Sign up</h2>
        {error && <p className="error">{error}</p>}

        {step === 1 && (
          <div className="signup-form">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button onClick={requestOtp} disabled={loading}>
              {loading ? 'Sending OTP...' : 'SIGN UP'}
            </button>

            <p className="or-text">Or Sign up with social platforms</p>
            <div className="social-icons">
              <button className="social-btn"><i className="fab fa-facebook-f"></i></button>
              <button className="social-btn"><i className="fab fa-google"></i></button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="signup-form">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button onClick={verifyOtpAndCreateAccount} disabled={loading}>
              {loading ? 'Verifying...' : 'Verify OTP & Sign Up'}
            </button>
          </div>
        )}
      </div>

      <div className="signup-right">
        <h3>One of us?</h3>
        <h1>WELCOME</h1>
        <button onClick={() => navigate('/login')}>LOGIN</button>
        <img
          src="login.jpg"
          alt="Illustration"
          className="illustration"
        />
      </div>
    </div>
  );
}

export default Signup;
