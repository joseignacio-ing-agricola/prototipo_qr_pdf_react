// Importamos la biblioteca React y el componente QRCode de 'qrcode.react'
import React from 'react';
import QRCode from 'qrcode.react';

// Definimos un componente funcional llamado QRCodePage
const QRCodePage = () => {
  // Definimos la URL que se codificará en el código QR
  const catalogUrl = 'http://localhost:3000/pdf';

  // El componente devuelve un fragmento de JSX
  return (
    <div className="QRCodePage">
      {/* Contenedor principal */}
      <div className="centered-content">
        {/* Contenedor del código QR */}
        <div>
          {/* Generamos el código QR con la URL especificada */}
          <QRCode value={catalogUrl} size={420} level={'H'} includeMargin={true} />
        </div>
        {/* Contenedor del botón de descarga */}
        <div>
          {/* Botón que al hacer clic descarga el código QR como imagen */}
          <button
            onClick={() => {
              // Seleccionamos el elemento canvas que contiene el código QR
              const canvas = document.querySelector("canvas");
              // Convertimos el canvas en una imagen PNG
              const img = canvas.toDataURL("image/png");
              // Creamos un enlace de descarga
              const link = document.createElement('a');
              // Especificamos el nombre del archivo descargado
              link.download = 'qr-code.png';
              // Establecemos el enlace del archivo como la imagen generada
              link.href = img;
              // Simulamos un clic en el enlace para iniciar la descarga
              link.click();
            }}
          >
            Descargar QR como imagen
          </button>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente QRCodePage
export default QRCodePage;
