const express = require('express');  
const usuarios = express.Router();  
const TokenController = require("../Controller/Token");  

usuarios.post("/Login", TokenController.login);  
usuarios.post("/Token", TokenController.refreshToken);

module.exports = usuarios;