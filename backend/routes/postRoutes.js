const router = require("express").Router();
const Post = require("../models/postModel");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Math.random().toString(36).substr(2, 9) + file.originalname);
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
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

router.get("/:id", async (req, res) => {
  const posts = await Post.findById(req.params.id);
  res.json(posts);
});
router.post("/", upload.single("blogImage"), async (req, res) => {
  const { title, article, createdAt } = req.body;
  const url = req.protocol + "://" + req.get("host");

  const newPost = new Post({
    title,
    article,
    createdAt,
    blogImage: req.file.path,
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
