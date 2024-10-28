const express = require('express');  
const usuarios = express.Router();  
const UsuariosController = require("../Controller/usuarios");  

usuarios.post("/usuarios/", UsuariosController.CreateUser);  
usuarios.get("/usuarios", UsuariosController.AllUsers);   
usuarios.get("/usuarios/:nif", UsuariosController.Login);  
usuarios.put("/usuarios/:nif", UsuariosController.AtualizaUser);  
usuarios.delete("/usuarios/:nif", UsuariosController.DeleteUser);  

module.exports = usuarios;