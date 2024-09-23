const express = require('express');
const router = express.Router();
const atestadoController = require('../controllers/atestado');

router.post("/atestados", atestadoController.createAtestado);
router.get("/atestados", atestadoController.getAtestados);
router.get("/atestados/:id", atestadoController.getAtestadoById);
router.put("/atestados/:id", atestadoController.updateAtestado);
router.delete("/atestados/:id", atestadoController.deleteAtestado);

module.exports = router;