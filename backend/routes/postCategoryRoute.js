const router = require("express").Router();
const PostCategory = require("../models/postCategoryModel");

router.get("/", async (req, res) => {
  const category = await PostCategory.find();
  res.json(category);
});
router.get("/:id", async (req, res) => {
  const category = await PostCategory.findById(req.params.id);
  res.json(category);
});
router.post("/", async (req, res) => {
  const { name } = req.body;

  const category = new PostCategory({
    name,
  });
  try {
    const savedPost = await category.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
