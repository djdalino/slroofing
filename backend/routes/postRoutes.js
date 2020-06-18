const router = require("express").Router();
const Post = require("../models/postModel");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Math.random().toString(36).substr(2, 9) + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,

  fileFilter: fileFilter,
});
const multiUpload = upload.fields([
  { name: "blogImage", maxCount: 1 },
  { name: "articleImage", maxCount: 1 },
]);

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const posts = await Post.findById(req.params.id);
  res.json(posts);
});
router.post("/", multiUpload, async (req, res) => {
  const { title, titleText, article, createdAt, category } = req.body;
  const newPost = new Post({
    title,
    titleText,
    category,
    article,
    createdAt,
    blogImage: req.files.blogImage[0].path,
    articleImage: req.files.articleImage[0].path,
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
