// BasicMenu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BasicMenu = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutAndRedirect = () => {
    // Lógica de cierre de sesión
    
    // Redirección a la página de inicio
    handleLogout();
    navigate('/');
  };

  return (
    <div className="basic-menu">
      {/* Aquí colocas el contenido del menú */}
      <button onClick={handleLogoutAndRedirect}>Cerrar sesión</button>
    </div>
  );
};

export default BasicMenu;

