import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <nav>
        <ul>
          <li><Link to="/registrar">Registrar Usuario</Link></li>
          <li><Link to="/listar">Listar Usuarios</Link></li>
        </ul>
      </nav>
    </div>
  );
}
