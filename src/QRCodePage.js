// QRCodePage.js
import React from 'react';
import QRCode from 'qrcode.react';

const QRCodePage = () => {
  const catalogUrl = 'http://localhost:3000/pdf';

  return (
    <div className="QRCodePage">
      <div className="centered-content">
        <QRCode value={catalogUrl} size={256} level={'H'} includeMargin={true} />
        <button
          onClick={() => {
            const canvas = document.querySelector("canvas");
            const img = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.download = 'qr-code.png';
            link.href = img;
            link.click();
          }}
        >
          Descargar QR como imagen
        </button>
      </div>
    </div>
  );
};

export default QRCodePage;
