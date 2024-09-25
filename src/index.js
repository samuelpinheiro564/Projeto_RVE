
require('dotenv').config();
const express = require('express');
const atestadosRoutes = require("../src/routes/atestadosRoutes")
const CampoTextoRoutes = require("../src/routes/campoTextoRoutes")
const ForumRoutes = require("../src/routes/forumRoutes")
const SaidaRoutes = require("../src/routes/saidaRoutes")
const UsuariosRoutes = require("../src/routes/usuariosRoutes")
const RveRoutes = require("../src/routes/rveRoutes")



const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());

app.use(atestadosRoutes);
app.use(CampoTextoRoutes);
app.use(ForumRoutes);
app.use(SaidaRoutes);
app.use(UsuariosRoutes);
app.use(RveRoutes);



app.get("/", (req, res) => {
  res.send("API do projeto de atestados");
}
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});