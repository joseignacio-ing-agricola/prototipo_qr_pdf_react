// App.js
import './styles.css';
import './header.css';
import './footer.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRCodePage from './QRCodePage';
import PDFPage from './PDFPage';
import AdminPage from './AdminPage';
import SelectPFD from './SelectPFD';

const Header = () => (
  <header>
    <h1>Tu Aplicación</h1>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 Tu Aplicación</p>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <Routes>
            <Route
              path="/qrcode"
              element={
                <>
                  <Header />
                  <QRCodePage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pdf"
              element={<PDFPage />}
            />
            <Route
              path="/adminpage"
              element={
                <>
                  <Header />
                  <AdminPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/SelectPFD"
              element={
                <>
                  <Header />
                  <SelectPFD/>
                  <Footer />
                </>
              }
            />
          </Routes>
          
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
