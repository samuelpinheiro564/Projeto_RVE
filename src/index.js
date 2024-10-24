
require('dotenv').config();
const express = require('express');
const atestadosRoutes = require("../src/routes/atestadosRoutes")
const CampoTextoRoutes = require("../src/routes/campoTextoRoutes")
const ForumRoutes = require("../src/routes/forumRoutes")
const SaidaRoutes = require("../src/routes/saidaRoutes")
const SaidaProfessor = require("../src/routes/saidaProfessorRoutes")
const usuarios = require("../src/routes/usuarios.routes")

const RveRoutes = require("../src/routes/rveRoutes")
const cors = require('cors');  
 
const app = express();

app.use(cors());
const port = process.env.PORT || 3000; 

app.use(express.json());

app.use(atestadosRoutes);
app.use(CampoTextoRoutes);
app.use(ForumRoutes);
app.use(SaidaRoutes);
app.use(SaidaProfessor);
app.use(usuarios);
app.use(RveRoutes);



app.get("/", (req, res) => {
  res.send("API do projeto de atestados");
}
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});