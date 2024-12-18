const express = require('express');
const router = express.Router();
const SaidaController = require("../Controller/saida")


router.post("/saida", SaidaController.createSaidaRecord);
router.get("/saida", SaidaController.getAllSaidas);
router.get("/saida/ultimasaida", SaidaController.getUltimaSaida);
router.get("/saida/:id", SaidaController.getSaidaRecordById);
router.put("/saida/:id", SaidaController.updateSaidaRecord);
router.get("/saida/menor/idade", SaidaController.MenorIdade);
router.put("/saida/assinatura/anaq/:id", SaidaController.postAssinaturaAnaq);
router.put("/saida/assinaturaprof/:id", SaidaController.postAssinaturaProf);
router.delete("/saida/:id", SaidaController.deleteSaidaRecord);

module.exports = router;