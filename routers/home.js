const express = require("express");
const router = express.Router();

const homePageController = require('../controllers/getHomeController');

router.get("/", homePageController);
  
module.exports = router;