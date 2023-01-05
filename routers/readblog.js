const express = require("express");
const router = express.Router();


const Post = require("../database/models/Post");
const getReadEachPostController = require('../controllers/getReadEachPostController');

// Whichever blog is clicked should be displayed in a brand new page 
router.get("/post/:id", getReadEachPostController);

module.exports = router;