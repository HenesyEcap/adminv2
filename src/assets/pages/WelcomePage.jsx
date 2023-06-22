import React, { useState } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import './WelcomePage.css';
import Trainlist from './Trainlist';
import BookingInfo from './BookingInfo';


function WelcomePage() {
  const location = useLocation();
  const [sidebarClosed, setSidebarClosed] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/'); // Redirect to the welcome page after logout
  };

  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  return (
    <div className={`welcome-page ${sidebarClosed ? 'sidebar-closed' : ''}`}>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {sidebarClosed ? (
          <FontAwesomeIcon icon={faChevronRight} />
        ) : (
          <FontAwesomeIcon icon={faChevronLeft} />
        )}
      </button>
      <nav className="welcome-page-header">
        <div className="welcome-page-logo">
          <img src={logo} alt="Company Logo" />
          <span className="welcome-page-logo-text">VEE EXPRESS</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="welcome-page-content">
        <aside className={`welcome-page-sidebar ${sidebarClosed ? 'sidebar-closed' : ''}`}>
          <ul className="sidebar-nav">
            <li>
              <Link
                to="/WelcomePage"
                className={location.pathname === '/WelcomePage' ? 'active' : ''} >
                <FontAwesomeIcon icon={faChartBar} size="lg" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/BookingInfo"
                className={location.pathname === '/BookingInfo' ? 'active' : ''} >
                <FontAwesomeIcon icon={faChartBar} size="lg" />
                <span>BookingInfo</span>
              </Link>
              </li>
          </ul>
        </aside>
        <div className="welcome-page-main">
          <h1>Welcome to the Dashboard</h1>
          <Trainlist />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
