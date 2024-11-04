const express = require('express');
const router = express.Router();
const ForumController = require("../Controller/Forum")


router.post("/rve_usuario", ForumController.CreateRve);
router.get("/rve_usuario/:id_rve", ForumController.getAllRveByIdRve);


module.exports = router;