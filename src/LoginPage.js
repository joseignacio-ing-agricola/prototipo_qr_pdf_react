// LoginPage.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

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
        // Autenticación exitosa, llama al método de inicio de sesión del contexto de autenticación
        login();

        // Redirige a la página adminpage
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
      // Verifica si las credenciales son correctas (este es un ejemplo muy básico)
      if (user === 'admin' && pass === 'password') {
        resolve({ success: true });
      } else {
        resolve({ success: false });
      }
    });
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <label>
          Nombre de usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">
          Iniciar sesión
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
