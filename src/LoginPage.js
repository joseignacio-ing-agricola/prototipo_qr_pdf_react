import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import './styles.css';
import logo from './logo.png'; // Importa tu imagen de logo

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);
  const [colorIndex, setColorIndex] = useState(0);
  const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
    }
    if (storedUsername) {
      focusPassword();
    }
  }, []);

  useEffect(() => {
    // Si se cargó un usuario, también actualizamos el estado de la contraseña
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername && storedPassword) {
      setPassword(storedPassword);
    }
  }, [username]); // Se activa cuando el estado de 'username' cambia

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fakeAuthService(username, password);

      if (response.success) {
        login();
        navigate('/adminpage');
      } else {
        setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setError('Error al intentar iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  const fakeAuthService = (user, pass) => {
    return new Promise((resolve, reject) => {
      if (user === 'admin' && pass === 'password') {
        resolve({ success: true });
      } else {
        resolve({ success: false });
      }
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const MIN_FONT_SIZE = 10;
  const MAX_FONT_SIZE = 18;
  
  const increaseFontSize = () => {
    if (fontSize < MAX_FONT_SIZE) {
      setFontSize((prevSize) => prevSize + 1);
    }
    if (fontSize === MAX_FONT_SIZE - 1) {
      setColorIndex((prevIndex) => (prevIndex + 1) % rainbowColors.length);
    }
  };
  
  const decreaseFontSize = () => {
    if (fontSize > MIN_FONT_SIZE) {
      setFontSize((prevSize) => prevSize - 1);
    }
    if (fontSize === MIN_FONT_SIZE + 1) {
      setColorIndex((prevIndex) => (prevIndex + 1) % rainbowColors.length);
    }
  };

  const focusPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  return (
    <div className={`centered-content ${theme === 'dark' ? 'dark-theme' : ''}`} style={{ fontSize: `${fontSize}px` }}>
      <div className="login-container" style={{ fontSize: 'inherit' }}>
        <div className="login-controls-container">
          <div className="logo-controls-container">
            <div className="control-box" onClick={increaseFontSize}>
              A+
            </div>
            <div className="control-box" onClick={decreaseFontSize}>
              A-
            </div>
            <div className="control-box" onClick={toggleTheme}>
              <Brightness4Icon />
            </div>
          </div>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
        <h2 style={{ color: '#000', WebkitTextStroke: `1px ${rainbowColors[colorIndex]}`, textShadow: 'none' }}>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <Box sx={{ '& .MuiTextField-root': { marginBottom: '20px', textAlign: 'center' } }}>
            <TextField
              label="Usuario"
              type="text"
              defaultValue={username} // Cambiamos value por defaultValue
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              className={username ? 'filled' : ''}
              inputRef={usernameRef}
              style={{ fontSize: 'inherit' }}
              InputLabelProps={{ style: { fontSize: 'inherit' } }}
            />
            <TextField
              label="Contraseña"
              type="password"
              defaultValue={password} // Cambiamos value por defaultValue
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              className={password ? 'filled' : ''}
              inputRef={passwordRef}
              style={{ fontSize: 'inherit' }}
              InputLabelProps={{ style: { fontSize: 'inherit' } }}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ fontSize: 'inherit' }}>
            Iniciar sesión
          </Button>
          {error && <p className="error-message" style={{ fontSize: 'inherit' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
