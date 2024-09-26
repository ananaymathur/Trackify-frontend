// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import Navbar from './components/Navbar';
import './App.css'; // Import the main CSS file for styling

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          // Decode the token to get the expiration time
          const expiryTime = JSON.parse(atob(token.split('.')[1])).exp * 1000;
          if (expiryTime > Date.now()) {
            setIsAuthenticated(true); // Token is still valid, set authenticated to true
          } else {
            handleLogout(); // Token is expired, log the user out
          }
        } catch (error) {
          handleLogout(); // If decoding fails, log the user out
        }
      }
    };

    checkAuthStatus(); // Check the auth status when the component mounts
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token on logout
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </Router>
  );
};

// Separate component for routing and location context
const AppContent = ({ isAuthenticated, handleLogin, handleLogout }) => {
  const location = useLocation(); // Now correctly inside the Router context
  const isOnAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <>
      {/* Show Navbar only if logged in and not on login/register pages */}
      {isAuthenticated && !isOnAuthPage && <Navbar handleLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/register"
          element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/jobs"
          element={isAuthenticated ? <Jobs /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
