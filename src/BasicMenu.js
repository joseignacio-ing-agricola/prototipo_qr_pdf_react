// Importamos la biblioteca React y el hook 'useNavigate' de 'react-router-dom'
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Definimos un componente funcional llamado BasicMenu que recibe props
const BasicMenu = ({ handleLogout }) => {
  // Usamos el hook 'useNavigate' para obtener la función de navegación
  const navigate = useNavigate();

  // Definimos una función llamada handleLogoutAndRedirect
  const handleLogoutAndRedirect = () => {
    // Lógica de cierre de sesión (no proporcionada en el código)
    
    // Llamamos a la función handleLogout pasada como prop
    handleLogout();
    
    // Utilizamos la función navigate para redirigir a la página de inicio ('/')
    navigate('/');
  };

  // El componente devuelve un fragmento de JSX
  return (
    <div className="basic-menu">
      {/* Aquí va el contenido del menú */}
      {/* Se renderiza un botón con un evento onClick que llama a handleLogoutAndRedirect */}
      <button onClick={handleLogoutAndRedirect}>Cerrar sesión</button>
    </div>
  );
};

// Exportamos el componente BasicMenu
export default BasicMenu;
