// PDFPage.js
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

const pdfjs = require('pdfjs-dist/build/pdf');

GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFPage = () => {
  const [numPages, setNumPages] = useState(null);
  const pdfUrl = 'https://raw.githubusercontent.com/Rodrigomontenegrofarias/pdf/main/2023_Rodrigo_Montenegro.pdf';

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="PDFPage">
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
        
        <Page key={`page_${index + 1}`} pageNumber={index + 1} width={700} renderTextLayer={false} />

        ))}
      </Document>
    </div>
  );
};

export default PDFPage;
