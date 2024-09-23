const express = require('express');
const router = express.Router();
const SaidaController = require("../Controller/saida")


router.post("/saida", SaidaController.createSaida);
router.get("/saida", SaidaController.getSaida);
router.get("/saida/:id", SaidaController.getSaidaById);
router.put("/saida/:id", SaidaController.updateSaida);
router.delete("/saida/:id", SaidaController.deleteSaida);


module.exports = router;