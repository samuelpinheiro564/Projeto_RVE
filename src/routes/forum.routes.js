const express = require('express');
const router = express.Router();
const ForumController = require("../Controller/Forum")


router.post("/rve_usuarios", ForumController.CreateRve);
router.get("/rve_usuarios/:usuario_nif", ForumController.getAllRveByNif);


module.exports = router;