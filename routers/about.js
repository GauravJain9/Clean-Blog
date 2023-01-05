const express = require("express");
const router = express.Router();


const aboutPageController = require('../controllers/getAboutController');

router.get("/about", aboutPageController);

module.exports = router;