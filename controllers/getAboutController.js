const jwt = require("jsonwebtoken");
const { Logger } = require("mongodb");
const User = require("../database/models/User");

module.exports = async (req,res) => {
    try {
        res.render("about");
    }
    catch(error) {
        res.status(401).send(error);
       //  res.render("/");
    }
    // console.log(req.cookies.jwt + "   this is the cokkie");
    // res.render("about");
};