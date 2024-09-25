const express = require('express');
const router = express.Router();
const UsuariosController = require("../Controller/usuarios")


router.post("/usuarios", UsuariosController.CreateUser);
router.get("/usuarios", UsuariosController.AllUser);
router.get("/usuarios/:id", UsuariosController.GetUserById);
router.put("/usuarios/:id", UsuariosController.AtualizaUser);
router.delete("/usuarios/:id", UsuariosController.DeleteUSer);

module.exports = router;