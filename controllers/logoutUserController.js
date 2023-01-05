const User = require("../database/models/User");
const jwt = require("jsonwebtoken");

module.exports = async(req,res) => {
    try {
      const token = req.cookies.jwt;
      const verifyUser = jwt.verify(token, process.env.SECRET_KEY); 
      if(verifyUser != null) {
         res.clearCookie("jwt");
      }
      const user = await User.findOne({_id : verifyUser._id});
      user.tokens = user.tokens.filter((currElement) => {
        return (currElement.token != token);
      })
      await user.save();
      loggedinhai = false;
      res.redirect("/");
    }
    catch(err) {
      res.status(500).send(err);
    }
  };