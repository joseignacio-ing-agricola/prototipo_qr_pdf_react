// App.js
import './styles.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRCodePage from './QRCodePage';
import PDFPage from './PDFPage';
import AdminPage from './AdminPage';
import SelectPFD from './SelectPFD';
import LoginPage from './LoginPage';
import { AuthProvider } from './AuthContext';
import BasicMenu from './BasicMenu';

const Header = ({ handleLogout }) => (  
  <header>
    <div className="header-content">
      <div className="left-header">
        <img
          src="/ruta/de/la/imagen.jpg"
          alt="Descripción de la imagen"
          className="header-image"
        />
      </div>
      <div className="center-header">
        <h1>Tu Aplicación</h1>
      </div>
      <div className="right-header">
        <BasicMenu handleLogout={handleLogout} />
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 Tu Aplicación</p>
  </footer>
);

const App = () => {
  // Definir la función handleLogout
  const handleLogout = () => {
    // Lógica de cierre de sesión aquí
    console.log('Cierre de sesión');
  };

  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="container">
            <Routes>
              <Route
                path="/qrcode"
                element={
                  <>
                    <Header handleLogout={handleLogout} />
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
                    <Header handleLogout={handleLogout} />
                    <AdminPage />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/SelectPFD"
                element={
                  <>
                    <Header handleLogout={handleLogout} />
                    <SelectPFD/>
                    <Footer />
                  </>
                }
              />
              <Route
                path="/"
                element={<LoginPage />}
              />
            </Routes>
          </div>
        </Suspense>
      </AuthProvider>
    </Router>
  );
};

export default App;

