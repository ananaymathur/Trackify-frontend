// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar styling

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get the current location

  // Function to handle logout
  const logout = (e) => {
    e.preventDefault(); // Prevent default link behavior
    handleLogout(); // Call the logout function passed from the App component
    navigate('/login'); // Redirect the user to the login page after logout
  };

  // Function to check if the current path matches the link path
  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* App name on the left */}
        <div className="navbar-brand">Trackify</div>
        {/* Navigation links on the right */}
        <div className="navbar-links">
          <Link
            to="/dashboard"
            className={`navbar-link ${isActiveLink('/dashboard') ? 'active-link' : ''}`} // Apply active class if on Dashboard
          >
            Dashboard
          </Link>
          <Link
            to="/jobs"
            className={`navbar-link ${isActiveLink('/jobs') ? 'active-link' : ''}`} // Apply active class if on Jobs
          >
            Jobs
          </Link>
          <Link
            to="/login"
            className="navbar-link"
            onClick={logout}
          >
            <span className="input-ico material-icons">logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
