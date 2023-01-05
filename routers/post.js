const express = require("express");
const router = express.Router();


const Post = require("../database/models/Post");
const getPostController = require('../controllers/getPostController');
const postPostController = require('../controllers/postPostController');

// For composing the blog gives out a form 
router.get("/post", getPostController);

// Takes the blog from the user and saves it to database
router.post("/post", postPostController);


module.exports = router;