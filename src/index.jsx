require('dotenv').config();
const express = require('express');
const atestadoRoutes = require("../src/routes/atestado.routes")
const CampoTextoRoutes = require("../src/routes/CampoTexto.routes")
const saidaRoutes = require("../src/routes/saida.routes")
const usuariosRoutes = require("../src/routes/usuarios.routes")
const RveRoutes = require("../src/routes/rve.routes")
const ForumRoutes = require("../src/routes/forum.routes")


const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());

app.use(atestadoRoutes);
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