const express = require('express');
const router = express.Router();
const ForumController = require("../Controller/Forum")


router.post("/forum", ForumController.CreateForum);
router.get("/forum", ForumController.GetAllForum);
router.get("/forum/:id", ForumController.getForumById);
router.put("/forum/:id", ForumController.updateForum);
router.delete("/forum/:id", ForumController.deleteForum);


module.exports = router;