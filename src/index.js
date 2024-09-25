
require('dotenv').config();
const express = require('express');
const atestadosRoutes = require("../src/routes/atestadosRoutes")



const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());

app.use(atestadosRoutes);


app.get("/", (req, res) => {
  res.send("API do projeto de atestados");
}
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});