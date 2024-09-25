const express = require('express');
const router = express.Router();
const RveController = require("../Controller/Rve")

router.post("/rve", RveController.createRveRecord);
router.get("/rve", RveController.getRveRecords);
router.get("/rve/:id", RveController.getRveRecordById);
router.put("/rve/:id", RveController.updateRveRecord);
router.delete("/rve/:id", RveController.deleteRveRecord);

module.exports = router;