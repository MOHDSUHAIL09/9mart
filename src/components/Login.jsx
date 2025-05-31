import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../store/authSlice';
import authService from '../appwrite/auth';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async (data) => {
    setError("");
    setLoading(true);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (err) {
      setError(err?.message || "Login failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <form onSubmit={handleSubmit(loginUser)} className="signup-form">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email format"
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required"
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p className="or-text">or continue with</p>
          <div className="social-icons">
            <button type="button" className="social-btn"><i className="fab fa-google"></i></button>
            <button type="button" className="social-btn"><i className="fab fa-facebook-f"></i></button>
          </div>
        </form>
      </div>

      <div className="signup-right">
        <h1>Welcome Back!</h1>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <img src="/login-illustration.svg" alt="Illustration" className="illustration" />
      </div>
    </div>
  );
}

export default Login;