const jwt = require("jsonwebtoken");
const User = require("../database/models/User");

module.exports = async (req,res) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY); 
        const user = await User.findOne({_id : verifyUser._id});
        loggedinhai = true;
        res.render("post");
    }
    catch(error) {
        // res.status(401).send(error);
        loggedinhai = false;
        res.redirect("/");
    }
};