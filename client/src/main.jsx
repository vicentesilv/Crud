import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Registrar from './pages/Registrar';
import Listar from './pages/Listar';
import DetalleUsuario from './pages/DetalleUsuario';
import Actualizar from './pages/Actualizar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/listar" element={<Listar />} />
      <Route path="/listar/:id" element={<DetalleUsuario />} />
      <Route path="/actualizar/:id" element={<Actualizar />} />
    </Routes>
  </BrowserRouter>
);
