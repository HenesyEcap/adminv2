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
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div
          style={{
            ...styles.formGroup,
            animation: shakeAnimation ? 'shake 0.5s' : 'none',
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            style={styles.inputField}
          />
        </div>
        <div
          style={{
            ...styles.formGroup,
            animation: shakeAnimation ? 'shake 0.5s' : 'none',
          }}
        >
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.inputField}
          />
        </div>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <button type="submit" style={styles.loginButton}>
          Log In
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    marginBottom: '20px',
    color: 'orange',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formGroup: {
    width: '100%',
    marginBottom: '15px',
  },
  inputField: {
    width: '100%',
    padding: '12px',
    border: '1px solid #dddfe2',
    borderRadius: '5px',
    fontSize: '14px',
    backgroundColor: '#f0f2f5',
    outline: 'none',
  },
  errorMessage: {
    marginTop: '10px',
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
  },
  loginButton: {
    width: '50%',
    padding: '12px',
    backgroundColor: '#1877f2',
    border: 'none',
    color: '#ffffff',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s',
  },
};

export default Login;
