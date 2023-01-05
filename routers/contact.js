const express = require("express");
const router = express.Router();

const contactPageController = require('../controllers/getContactController');

router.get("/contact", contactPageController);
  
module.exports = router;