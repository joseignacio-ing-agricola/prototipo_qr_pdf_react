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
import LoginPage from './LoginPage';  // Importa el componente de inicio de sesión
import { AuthProvider } from './AuthContext';  // Importa el proveedor de contexto de autenticación

const Header = () => (
  <header>
    <div className="header-content">
      <img
        src="/ruta/de/la/imagen.jpg"
        alt="Descripción de la imagen"
        className="header-image"
      />
      <h1>Tu Aplicación</h1>
      
    </div>
    
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
      <AuthProvider>  {/* Envuelve tu aplicación con el proveedor de contexto de autenticación */}
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
              <Route
                path="/login"  // Agrega una ruta para el componente de inicio de sesión
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