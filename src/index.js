
require('dotenv').config();
const express = require('express');
const CampoTextoRoutes = require("../src/routes/campoTexto.routes")
const ForumRoutes = require("../src/routes/forum.routes")
const SaidaRoutes = require("../src/routes/saida.routes")
const usuarios = require("../src/routes/usuarios.routes")


const RveRoutes = require("./routes/rve.routes")
const cors = require('cors');  
 
const app = express();

app.use(cors());
const port = process.env.PORT || 3000; 

app.use(express.json());

app.use(CampoTextoRoutes);
app.use(ForumRoutes);
app.use(SaidaRoutes);
app.use(usuarios);
app.use(RveRoutes);




app.get("/", (req, res) => {
  res.send("API do projeto de RVE Funcionando");
}
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});