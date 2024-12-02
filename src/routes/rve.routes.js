const express = require('express');
const router = express.Router();
const RveController = require("../Controller/Rve")

router.get("/rve", RveController.GetAllRves);
router.get("/rve/completa", RveController.rveCompleta);
router.post("/rve", RveController.CreateRve);
router.put("/campotexto", RveController.EditRve);
router.delete("/rve/:id", RveController.deleteRve);
router.get("/rve/:id", RveController.GetBYIDRVE);
router.get("/rve/es/tu/dan/te/:estudante/:nifautor", RveController.rveEstudante);
router.get("/rve/ultima/criada/:nifautor", RveController.rveUltimaCriada);
router.get("/rve/t/u/r/ma/:turma/:nifautor", RveController.rveTurma);
router.get("/rve/c/u/r/s/o/:curso/nifautor", RveController.rveCurso);


module.exports = router;
