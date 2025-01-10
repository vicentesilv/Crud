import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetalleUsuario() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/usuario/listar/${id}`)
      .then((res) => res.json())
      .then((data) => setUsuario(data));
  }, [id]);

  if (!usuario) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Detalle de Usuario</h2>
      <p>Nombre: {usuario.nombre}</p>
      <p>Email: {usuario.email}</p>
      <p>Edad: {usuario.edad}</p>
    </div>
  );
}