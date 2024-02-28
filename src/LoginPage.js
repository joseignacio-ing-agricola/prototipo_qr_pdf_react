import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './styles.css';

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    document.body.classList.toggle('dark-theme');
  };

  const increaseFontSize = () => {
    changeFontSize(2);
  };

  const decreaseFontSize = () => {
    changeFontSize(-2);
  };

  const changeFontSize = (delta) => {
    const currentFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const newFontSize = currentFontSize + delta;
    document.documentElement.style.fontSize = newFontSize + 'px';
  };

  return (
    <div className="centered-content">
      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <Box sx={{ '& .MuiTextField-root': { marginBottom: 1 } }}>
            <TextField
              label="Nombre de usuario"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
            <TextField
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Iniciar sesión
          </Button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="login-controls-container">
          <div className="control-box" onClick={toggleTheme}>
            <span>Cambiar Tema</span>
          </div>
          <div className="control-box" onClick={increaseFontSize}>
            <span>Agrandar Letras</span>
          </div>
          <div className="control-box" onClick={decreaseFontSize}>
            <span>Reducir Letras</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
