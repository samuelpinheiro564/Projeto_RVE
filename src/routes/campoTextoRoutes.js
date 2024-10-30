const express = require('express');
const router = express.Router();
const CampoTextoController = require("../Controller/CampoTexto")

router.post("/camposTexto", CampoTextoController.CreateCampoTexto);
router.get("/camposTexto", CampoTextoController.GetAllCampoTexto);
router.get("/camposTexto/:id", CampoTextoController.getCampoTextoById);
router.get("/camposTextoRve/:idrve", CampoTextoController.getCampostextoRve);
router.put("/camposTexto/:id", CampoTextoController.updateCampoTexto);
router.delete("/camposTexto/:id", CampoTextoController.deleteCampoTexto);

module.exports = router;