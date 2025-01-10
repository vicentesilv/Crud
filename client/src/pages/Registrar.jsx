import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registrar() {
  const [formData, setFormData] = useState({ nombre: '', email: '', edad: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/usuario/registrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    navigate('/listar');
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="edad" type="number" placeholder="Edad" onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
