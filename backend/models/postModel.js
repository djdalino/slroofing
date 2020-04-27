const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "PostCategory",
      required: true,
    },
  ],
  titleText: { type: String, required: true },
  article: { type: String, required: true },
  blogImage: { type: String, required: true },
  articleImage: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
