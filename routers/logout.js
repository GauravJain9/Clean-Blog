const express = require("express");
const router = express.Router();

const getlogoutController = require('../controllers/logoutUserController');

router.get("/logout", getlogoutController);
  
module.exports = router;