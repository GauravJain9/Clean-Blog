const express = require("express");
const router = express.Router();

const getRegistrationFormController = require('../controllers/getRegistrationFormController');
const registerUserController = require('../controllers/registerUserController');

router.get("/register", getRegistrationFormController);
router.post("/register", registerUserController);

module.exports = router;