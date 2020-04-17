const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  blogImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = Post = mongoose.model("post", postSchema);
