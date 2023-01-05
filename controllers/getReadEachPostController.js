const Post = require("../database/models/Post");

module.exports = async function(req,res) {
    // Here trim is important because id field is having whitespaces in request body/headers don't know why
    const blog_id = (req.params.id.trim());
    const blog = await Post.findById(blog_id);
    res.render("readblog", {Blog : blog});
  };