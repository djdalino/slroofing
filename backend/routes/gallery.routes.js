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

//View image
router.get("/:id", async (req, res) => {
  const posts = await Gallery.findById(req.params.id);
  res.json(posts);
});

//Post image
router.post("/", upload.single("photo"), async (req, res) => {
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

//Delete image
router.delete("/:id", async (req, res) => {
  try {
    const removeImage = await Gallery.remove({ _id: req.params.id });
    res.json(removeImage);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
