

// Inside your AuthForm.js or directly in your Login.js / Register.js
import React, { useState } from 'react';
import './AuthForm.css'; // Ensure you have this CSS file for styling

const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {type === 'register' && (
        <div className="input-group">
        <label className="input-label">Name</label>
        <div className="input-container">
          <input
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="input-field"
            required
          />
          <span className="input-icon material-icons">person</span> {/* Email Icon */}
        </div>
        </div>
      )}
      <div className="input-group">
        <label className="input-label">E-mail</label>
        <div className="input-container">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="input-field"
            required
          />
          <span className="input-icon material-icons">email</span> {/* Email Icon */}
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Password</label>
        <div className="input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input-field"
            required
          />
          < span className="input-icon material-icons"
            onClick={togglePasswordVisibility}
            style={{ cursor: 'pointer' }}
          >
            {showPassword ? 'visibility' : 'visibility_off'}
          </span> {/* Password Icon */}
        </div>
      </div>
      <button type="submit" className="auth-button">
        {type === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;
