import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import WelcomePage from './WelcomePage';
import BookingInfo from './BookingInfo';

function App() {
  const [, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/welcome" element={<WelcomePage handleLogout={handleLogout} />} />
        <Route path="/bookinginfo" element={<BookingInfo handleLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;
