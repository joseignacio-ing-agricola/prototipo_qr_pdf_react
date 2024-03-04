import React from 'react';
import QRCode from 'qrcode.react';

const QRCodePage = () => {
  const catalogUrl = 'http://localhost:3000/pdf';

  return (
    <div className="QRCodePage">
      <div className="qr-container" id="qr-container">
        <QRCode 
          value={catalogUrl} 
          level={'H'} 
          includeMargin={true} 
          size={256} // Tamaño deseado de la imagen del código QR
          style={{ width: '256px', height: '256px' }} // Estilo adicional si es necesario
        />
      </div>

      <div className="download-button-container">
        <button
          className="download-button"
          onClick={() => {
            const canvas = document.querySelector("canvas");
            const img = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.download = 'qr-code.png';
            link.href = img;
            link.click();
          }}>
          Descargar QR como imagen
        </button>
      </div>
    </div>
  );
};

export default QRCodePage;

