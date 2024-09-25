const express = require('express');
const router = express.Router();
const CampoTextoController = require("../Controller/CampoTexto")

router.post("/camposTexto", CampoTextoController.createCampoTexto);
router.get("/camposTexto", CampoTextoController.getCampoTexto);
router.get("/camposTexto/:id", CampoTextoController.getCampoTextoById);
router.put("/camposTexto/:id", CampoTextoController.updateCampoTexto);
router.delete("/camposTexto/:id", CampoTextoController.deleteCampoTexto);

module.exports = router;