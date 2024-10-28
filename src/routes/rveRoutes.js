const express = require('express');
const router = express.Router();
const RveController = require("../Controller/Rve")

router.get("/rve", RveController.GetAllRves);
router.post("/rve", RveController.CreateRve);
router.put("/campotexto", RveController.EditRve);
router.delete("/rve/:id", RveController.deleteRve);
router.get("/rve/:NifAutor", RveController.GettRveBYId);

module.exports = router;
