const router = require("express").Router();
const Gallery = require("../models/gallery.model");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(
      null,
      Math.random()
        .toString(36)
        .substr(2, 9) +
        "-" +
        file.originalname
    );
  }
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
    fileSize: 1024 * 1024 * 15
  },
  fileFilter: fileFilter
});

router.get("/", async (req, res) => {
  const posts = await Gallery.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const posts = await Gallery.findById(req.params.id);
  res.json(posts);
});
router.post("/", upload.single("photo"), async (req, res) => {
  console.log("req file: " + req.file.path);
  const newPost = new Gallery({
    photo: req.file.path
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
