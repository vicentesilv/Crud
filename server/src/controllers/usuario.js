const connection = require("../models/connection");


const CreateUsuario = (req, res) => {
    // Verificamos si el cuerpo de la solicitud está definido
    if (!req.body) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });
    }
  
    const { nombre, email, edad } = req.body;
  
    if (!nombre || !email || !edad) {
      return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }
  
    connection.CreateUsuario(nombre, email, edad, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al insertar usuario.', details: err });
      }
      res.status(201).json({ id: result.insertId, nombre, email, edad });
    });
  };

const ObtenerUsuarios = (req, res) => {
    connection.ObtenerUsuarios((err, result) => {
        if(err){
            return res.status(500).json({msg:"Error al obtener los usuarios.",details:err});
        }
        res.status(200).json(result);
    });
};

const ObtenerUsuario = (req, res) => {
    const {id} = req.params;
    connection.ObtenerUsuario(id,(err, result) => {
        if(err){
            return res.status(500).json({msg:"Error al obtener el usuario.",details:err});
        }
        if(result.length === 0){
            return res.status(404).json({msg:"Usuario no encontrado"});
        }
        res.status(200).json(result[0]);
    });
};

const actualizarUsuario = (req, res) => {
    const {id} = req.params;
    const {nombre,email,edad} = req.body;
    if (!nombre || !email || !edad) {
        return res.status(400).json({ msg: "porfavor llena todos los datos" });
    }
    connection.ActualizarUsuario(nombre,email,edad,id,(err, result) => {
        if(err){
            return res.status(500).json({msg:"Error al actualizar el usuario.",details:err});
        }
        if(result.affectedRows === 0){
            return res.status(404).json({msg:"Usuario no encontrado"});
        }
        res.status(200).json({msg:"Usuario actualizado exitosamente."});
});
};

const eliminarUsuario = (req, res) => {
    const {id} = req.params;
    connection.EliminarUsuario(id,(err, result) => {
        if(err){
            return res.status(500).json({msg:"Error al eliminar el usuario.",details:err});
        }
        if(result.affectedRows === 0){
            return res.status(404).json({msg:"Usuario no encontrado"});
        }
        res.status(200).json({msg:"Usuario eliminado exitosamente."});
    });
};

module.exports = {
    CreateUsuario,
    ObtenerUsuarios,
    ObtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
};