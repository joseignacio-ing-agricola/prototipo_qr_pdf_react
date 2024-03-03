import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icono para cambiar el tema
import './styles.css';

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light'); // Estado para el tema
  const [fontSize, setFontSize] = useState(16); // Estado para el tamaño de la letra

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
    setTheme(theme === 'light' ? 'dark' : 'light'); // Cambiar entre temas
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2); // Aumentar el tamaño de la letra
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => prevSize - 2); // Disminuir el tamaño de la letra
  };

  return (
    <div className={`centered-content ${theme === 'dark' ? 'dark-theme' : ''}`} style={{ fontSize: `${fontSize}px` }}>
      <div className="login-container">
      <div className="login-controls-container">
          <div className="control-box" onClick={toggleTheme}>
            <Brightness4Icon /> {/* Icono para cambiar el tema */}
          </div>
          <div className="control-box" onClick={increaseFontSize}>
            A+ {/* Botón para aumentar el tamaño de la letra */}
          </div>
          <div className="control-box" onClick={decreaseFontSize}>
            A- {/* Botón para reducir el tamaño de la letra */}
          </div>
        </div>
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
        
      </div>
    </div>
  );
};

export default LoginPage;
