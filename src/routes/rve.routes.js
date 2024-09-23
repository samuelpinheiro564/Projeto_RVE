const express = require('express');
const router = express.Router();
const RveController = require("../Controller/Rve")

router.post("/rve", RveController.createRve);
router.get("/rve", RveController.getRve);
router.get("/rve/:id", RveController.getRveById);
router.put("/rve/:id", RveController.updateRve);
router.delete("/rve/:id", RveController.deleteRve);

module.exports = router;