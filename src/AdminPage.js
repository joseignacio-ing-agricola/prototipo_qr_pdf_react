// AdminPage.js
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AdminPage = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // Si el usuario no ha iniciado sesión, redirige al componente de inicio de sesión
    return <Navigate to="/" />;
  }

  return (
    <div className="admin-container">
      <nav className="vertical-menu">
        <ul>
          <li>
            <Link to="/qrcode">Generar QR</Link>
          </li>
          <li>
            <Link to="/pdf">Ver PDF (Carta)</Link>
          </li>
          
        </ul>
      </nav>
      {/* ... contenido de AdminPage ... */}

    </div>
  );
};

export default AdminPage;