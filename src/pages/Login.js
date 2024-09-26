// src/pages/Login.js
import React from 'react';
import AuthForm from '../components/AuthForm';
import API from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css'; // Import the shared CSS for styling
import img from './img.jpeg'

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await API.post('/auth/login', data);
      localStorage.setItem('token', response.data.token);
      onLogin(); // Update the authentication state in App.js
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-page auth-container">
        <div className='text-container'>
       <h1 className="site-name">Trackify</h1>
      <div className="auth-form-container">
        
        <h1 className="auth-title">Welcome Back!</h1>
        <h2 className="auth-subtitle">Log in to Trackify</h2>
        <AuthForm type="login" onSubmit={handleLogin} />
        <p className="auth-footer">
          First time here? <Link to="/register" className="auth-link">Create an account</Link>
        </p>
      </div>
      </div>
      <div className="auth-image-container">
        <img src={img} alt="Background" className="auth-image" />
      </div>
    </div>
  );
};

export default Login;

