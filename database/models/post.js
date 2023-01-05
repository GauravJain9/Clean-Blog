const { Binary } = require("mongodb");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    postedOn : Date,
    filesUploaded : {
        data: Buffer,
        type: String,
        required: false
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;