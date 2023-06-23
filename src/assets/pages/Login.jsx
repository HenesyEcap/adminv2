import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shakeAnimation, setShakeAnimation] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check username and password
    if (username === 'admin' && password === '123') {
      setIsLoggedIn(true);
      navigate('/WelcomePage');
    } else {
      setErrorMessage('Incorrect username or password');
      setShakeAnimation(true);

      setTimeout(() => {
        setShakeAnimation(false);
      }, 500);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="mb-6 text-2xl font-bold text-center text-orange-500">
          Admin Login
        </h1>
        <form onSubmit={handleLogin}>
          <div
            className={`mb-6 ${shakeAnimation ? 'animate-shake' : ''}`}
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div
            className={`mb-6 ${shakeAnimation ? 'animate-shake' : ''}`}
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          {errorMessage && (
            <p className="mb-4 text-red-500 text-center">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-1/2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
