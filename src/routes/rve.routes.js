const express = require('express');
const router = express.Router();
const Rve = require('../Controller/Rve');

router.get("/rve/todas/rves/participadas/como/usuario/:nifsusuarios", Rve.GetAllRves);
router.get("/rve", Rve.getAllautor);
router.get("/rve/completa/:nifsusuairos", Rve.rveCompleta);
router.get("/rve/autor/:nifautor", Rve.rveCriadaautor);
router.post("/rve", Rve.CreateRve);
router.put("/rve/:id", Rve.EditRve);
router.delete("/rve/:id", Rve.deleteRve);
router.get("/rve/:id", Rve.GetBYIDRVE);
router.get("/rve/estudante/:nome/:nifsusuarios", Rve.rveEstudante);
router.get("/rve/ultima/criada/:nifsusuarios", Rve.rveUltimaCriada);
router.get("/rve/turma/:turma/:nifsusuarios", Rve.rveTurma);
router.get("/rve/curso/:curso/:nifsusuarios", Rve.rveCurso);
router.get("/rve/sem/a/assinatura/:assinatura", Rve.rveSemAssinatura);
router.put("/rve/assinar/sucesso/rve/:assinatura/:id", Rve.assinarRve);

module.exports = router;
