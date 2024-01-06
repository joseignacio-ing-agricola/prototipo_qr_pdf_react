// App.js
import './styles.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import QRCodePage from './QRCodePage';
import PDFPage from './PDFPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/qrcode">Generate QR</Link>
              </li>
              <li>
                <Link to="/pdf">View PDF</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/qrcode" element={<QRCodePage />} />
            <Route path="/pdf" element={<PDFPage />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
