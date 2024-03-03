import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const SelectPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // Limpiar mensajes cuando se selecciona un nuevo archivo
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Realiza la carga del archivo a GitHub usando la API
      const response = await axios.put(
        'https://api.github.com/repos/tu-usuario/tu-repositorio/contents/nombre-del-archivo.pdf',
        {
          message: 'Agregar nuevo PDF',
          content: btoa(formData),
        },
        {
          headers: {
            Authorization: 'token TU_TOKEN_DE_ACCESO',
          },
        }
      );

      // Muestra mensaje de éxito
      setSuccessMessage('Archivo cargado exitosamente');
      console.log('Archivo cargado exitosamente:', response.data);
    } catch (error) {
      // Muestra mensaje de error
      setErrorMessage('Error al cargar el archivo. Por favor, inténtalo de nuevo.');
      console.error('Error al cargar el archivo:', error);
    }
  };

  // Efecto secundario para limpiar mensajes después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage(null);
    }, 3000);

    // Limpiar el temporizador al desmontar el componente o cuando cambie selectedFile
    return () => clearTimeout(timer);
  }, [selectedFile]);

  return (
    <div className="upload-container">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Cargar PDF</button>

      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default SelectPDF;
