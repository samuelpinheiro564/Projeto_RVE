const express = require('express');
const router = express.Router();
const SaidaProfessorController = require("../Controller/SaidaProfessor");

router.post("/saidaProfessor", SaidaProfessorController.createSaidaProfessorRecord);
router.get("/saidaProfessor", SaidaProfessorController.getSaidaProfessorRecords);
router.get("/saidaProfessor/:id", SaidaProfessorController.getSaidaProfessorRecordById);
router.put("/saidaProfessor/:id", SaidaProfessorController.updateSaidaProfessorRecord);
router.delete("/saidaProfessor/:id", SaidaProfessorController.deleteSaidaProfessorRecord);


module.exports = router;