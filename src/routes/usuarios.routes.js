const express = require('express');
const usuarios = express.Router();
const UsuariosController = require("../Controller/usuarios")


usuarios.post("/usuarios/", UsuariosController.CreateUser);
usuarios.get("/usuarios", UsuariosController.AllUser);
usuarios.get("/usuarios/:Nif", UsuariosController.Login);
usuarios.put("/usuarios/:Nif", UsuariosController.AtualizaUser);
usuarios.delete("/usuarios/:id", UsuariosController.DeleteUSer);

module.exports = usuarios;