const Post = require("../database/models/Post");
const jwt = require("jsonwebtoken");
const User = require("../database/models/User");

module.exports = async (req,res) => {
    try {
      if(!homeCheck && loggedinhai) {
      const token = req.cookies.jwt;
      const verifyUser = jwt.verify(token, process.env.SECRET_KEY); 
      const user = await User.findOne({_id : verifyUser._id});
      loggedinhai = true;
      }
    const posts = await Post.find({}).sort({postedOn : -1});
    res.render("home", {posts: posts});
    }
    catch(err) {
      // Here status code is given otherwise it will also become a valid request for 
      // this page and status code will be 200ok which is practically wrong thing to do
      loggedinhai = false;
      homeCheck = true;
      // res.status(500).render("servererror");
      res.redirect("/");
    }
  };