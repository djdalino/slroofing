const mongoose = require("mongoose");
const gallerySchema = new mongoose.Schema({
  photo: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Gallery", gallerySchema);
