// Importamos los módulos necesarios de React y otras dependencias
import { useNavigate } from 'react-router-dom'; // Importamos el hook useNavigate para la navegación
import { useAuth } from './AuthContext'; // Importamos el hook useAuth desde el contexto de autenticación
import React, { useState, useEffect } from 'react'; // Importamos React y los hooks useState y useEffect
import './styles.css'; // Importamos un archivo CSS para estilos
import { Tooltip as ReactTooltip } from 'react-tooltip'; // Importamos el componente Tooltip de react-tooltip

// Definimos un componente funcional llamado AdminPage
const AdminPage = () => {
  // Utilizamos el hook useAuth para obtener el estado de inicio de sesión del usuario
  const { isLoggedIn } = useAuth();
  // Usamos el hook useNavigate para obtener la función de navegación
  const navigate = useNavigate();
  // Definimos un estado para rastrear el botón activo
  const [activeButton, setActiveButton] = useState(null);

  // Efecto que se ejecuta cuando el componente se monta para obtener el estado del botón activo desde el almacenamiento local
  useEffect(() => {
    const storedActiveButton = localStorage.getItem('activeButton');
    if (storedActiveButton) {
      setActiveButton(parseInt(storedActiveButton));
    }
  }, []);

  // Función que maneja el clic en los botones   s
  const handleClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId); // Activa o desactiva el botón según su estado actual
    // Navega a la ruta correspondiente al botón clicado
    if (buttonId === 1) {
      navigate('/pdf');
    } else if (buttonId === 2) {
      navigate('/qrcode');
    }
  };

  // Efecto que se ejecuta cuando el estado del botón activo cambia para almacenar el nuevo estado en el almacenamiento local
  useEffect(() => {
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

  // Si el usuario no ha iniciado sesión, redirige al componente de inicio de sesión y retorna null
  if (!isLoggedIn) {
    navigate('/');
    return null;
  }

  // El componente devuelve un fragmento de JSX
  return (
    <div className="admin-container">
      {/* Botón para generar un PDF */}
      <button
        className={`bigButton ${activeButton === 1 ? 'active' : ''}`} // Aplica la clase 'active' si este es el botón activo
        onClick={() => handleClick(1)} // Maneja el clic en el botón PDF
        data-tip="Haz clic aquí para generar un PDF" // Descripción para el botón PDF
        data-place="bottom" // Coloca la descripción debajo del botón
      >
        Botón PDF
      </button>
      
      {/* Botón para generar un código QR */}
      <button
        className={`bigButton ${activeButton === 2 ? 'active' : ''}`} // Aplica la clase 'active' si este es el botón activo
        onClick={() => handleClick(2)} // Maneja el clic en el botón QR
        data-tip="Haz clic aquí para generar un código QR" // Descripción para el botón QR
        data-place="bottom" // Coloca la descripción debajo del botón
      >
        Botón QR
      </button>

      {/* Componente ReactTooltip para mostrar descripciones emergentes */}
      <ReactTooltip />
    </div>
  );
};

// Exportamos el componente AdminPage
export default AdminPage;
