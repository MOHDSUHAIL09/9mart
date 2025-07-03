import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import authService from '../appwrite/auth';

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

  // 🚨 Update this when deploying to Railway
  const BACKEND_URL = "https://server-s86f.onrender.com";
  

  const requestOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${BACKEND_URL}/request-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStep(2);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const verifyOtpAndSignup = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${BACKEND_URL}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      await authService.createAccount({ email, password, name });
      const user = await authService.getCurrentUser();
      dispatch(login(user));
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <h2>Signup with OTP</h2>
        {error && <p className="error">{error}</p>}

        {step === 1 && (
          <div className="signup-form">
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button onClick={requestOtp} disabled={loading}>
              {loading ? 'Sending...' : 'Send OTP'}
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
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button onClick={verifyOtpAndSignup} disabled={loading}>
              {loading ? 'Verifying...' : 'Verify & Signup'}
            </button>
          </div>
        )}
      </div>

      <div className="signup-right">
        <h3>One of us?</h3>
        <h1>WELCOME</h1>
        <button onClick={() => navigate('/login')}>LOGIN</button>
      </div>
    </div>
  );
}

export default Signup;
