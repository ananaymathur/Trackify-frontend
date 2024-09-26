// src/pages/Register.js
import React from 'react';
import AuthForm from '../components/AuthForm';
import API from '../utils/api';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import imageToUse from './img.jpeg';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const response = await API.post('/auth/register', data);
      localStorage.setItem('token', response.data.token);
      alert('Registered successfully!');
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      alert('User already exists');
    }
  };

    return (
        <div className="auth-page auth-container">
            <div className='text-container'>
            <h1 className="site-name">Trackify</h1>
        <div className="auth-form-container">
            <h1 className="auth-title">Hello there!</h1>
            <h2 className="auth-subtitle">Sign up for Trackify</h2>
            <AuthForm type="register" onSubmit={handleRegister} /> {/* Existing AuthForm component */}
            <p className="auth-footer">
            Have an account? <Link to="/login" className="auth-link">Log in</Link>
            </p>
        </div>
        </div>
        <div className="auth-image-container">
            <img src={imageToUse} alt="Background" className="auth-image" />
        </div>
        </div>
    );
};

export default Register;

