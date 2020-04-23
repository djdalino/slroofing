const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "PostCategory",
    },
  ],
  article: { type: String, required: true },
  blogImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
