const express = require('express');  
const usuarios = express.Router();  
const UsuariosController = require("../Controller/usuarios");  

usuarios.post("/usuarios", UsuariosController.CreateUser);  
usuarios.get("/usuarios/:nif", UsuariosController.AllUsers);  
usuarios.get("/usuarios/nome/:nome", UsuariosController.UserName);   
usuarios.get("/usuarios/:nif/:senha", UsuariosController.Login);  
usuarios.put("/usuarios/:nif", UsuariosController.AtualizaUser);  
usuarios.delete("/usuarios/:nif", UsuariosController.DeleteUser);  
usuarios.get("/usuariosRve/:idrve", UsuariosController.fetchUsuariosPorRVE);

module.exports = usuarios;