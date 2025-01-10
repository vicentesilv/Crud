import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Actualizar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nombre: '', email: '', edad: '' });

  useEffect(() => {
    fetch(`http://localhost:3000/usuario/listar/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/usuario/actualizar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    navigate('/listar');
  };

  return (
    <div>
      <h2>Actualizar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" value={formData.nombre} onChange={handleChange} required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        <input name="edad" type="number" value={formData.edad} onChange={handleChange} required />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}
