const Post = require("../database/models/Post");

module.exports = async (req,res) => {
    try{
    const blog = req.body;
    blog.postedOn = new Date();
    await Post.create(blog);
    console.log("Data  Saved in database");
    }
    catch(err) {
      console.log(err);
    }
    res.redirect("/");
  };