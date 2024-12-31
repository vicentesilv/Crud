const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');

router.post('/registrar', usuarioController.CreateUsuario);
router.get('/listar', usuarioController.ObtenerUsuarios);
router.get('/listar/:id', usuarioController.ObtenerUsuario);
router.put('/actualizar/:id', usuarioController.actualizarUsuario);
router.delete('/eliminar/:id', usuarioController.eliminarUsuario);

module.exports = router;
