import React, { useState } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import logo from './logo.png';
import './WelcomePage.css';
import Trainlist from './Trainlist';
import BookingInfo from './BookingInfo';

function WelcomePage() {
  const navigate = useNavigate();

  function handleLogout() {
    // Perform logout logic here
    navigate('/'); // Redirect to the welcome page after logout
  }

  return (
    <div className="welcome-page">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="dropdown">
            <button className="dropbtn">TRAIN MENU</button>
            <div className="dropdown-content">
              <Link to="/BookingInfo">Booking Info</Link>
              <a href="#home">Link3</a>
              <a href="#home">Link4</a>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <img src={logo} alt="Logo" />
          <h1>VEE EXPRESS</h1>
        </div>
        <div className="navbar-right">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="welcome-page-main" style={{ textAlign: 'center', backgroundColor: '#f2f2f2', padding: '20px' }} >
        <h1 style={{ fontSize: '24px', color: '#333333', fontWeight: 'bold' }} >Welcome to the Dashboard</h1>
        <Routes>
          <Route path="/booking-info" element={<BookingInfo />} />
          <Route path="/" element={<Trainlist />} />
        </Routes>
      </div>
    </div>
  );
}

export default WelcomePage;
