const express = require("express");
const router = express.Router();

const getloginPageController = require('../controllers/getLoginFormController');
const postloginPageController = require('../controllers/postLoginCredsController');

router.get("/login", getloginPageController);
router.post("/login", postloginPageController);
  
module.exports = router;