require('dotenv').config();
const express = require('express');
const atestadosRoutes = require("../src/routes/atestadosRoutes")
const CampoTextoRoutes = require("../src/routes/campoTextoRoutes")
const saidaRoutes = require("../src/routes/saidaRoutes")
const usuariosRoutes = require("../src/routes/usuariosRoutes")
const RveRoutes = require("../src/routes/rveRoutes")
const ForumRoutes = require("../src/routes/forumRoutes")


const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());

app.use(atestadosRoutes);
app.use(CampoTextoRoutes);
app.use(saidaRoutes);
app.use(usuariosRoutes);
app.use(RveRoutes);
app.use(ForumRoutes);

app.get("/", (req, res) => {
  res.send("API do projeto de atestados");
}
);




app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});