import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Listar() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/usuario/listar')
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  const handleEliminar = async (id) => {
    await fetch(`http://localhost:3000/usuario/eliminar/${id}`, { method: 'DELETE' });
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.email} - {usuario.edad}
            <Link to={`/listar/${usuario.id}`}> Ver </Link>
            <Link to={`/actualizar/${usuario.id}`}> Editar </Link>
            <button onClick={() => handleEliminar(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
