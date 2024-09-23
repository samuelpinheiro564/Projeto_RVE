const express = require('express');
const router = express.Router();
const UsuariosController = require("../Controller/usuarios")


router.post("/usuarios", UsuariosController.createUsuarios);
router.get("/usuarios", UsuariosController.getUsuarios);
router.get("/usuarios/:id", UsuariosController.getUsuariosById);
router.put("/usuarios/:id", UsuariosController.updateUsuarios);
router.delete("/usuarios/:id", UsuariosController.deleteUsuarios);

module.exports = router;