const express = require('express');
const router = express.Router();
const SaidaController = require("../Controller/saida")


router.post("/saida", SaidaController.createSaidaRecord);
router.get("/saida", SaidaController.getSaidaRecords);
router.get("/saida/:id", SaidaController.getSaidaRecordById);
router.put("/saida/:id", SaidaController.updateSaidaRecord);
router.delete("/saida/:id", SaidaController.deleteSaidaRecord);

module.exports = router;