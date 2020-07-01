const router = require("express").Router();
const Subcribe = require("../models/subscribeModel");

router.get("/", async (req, res) => {
  const subscribe = await Subcribe.find().sort({ createdAt: -1 });
  res.json(subscribe);
});
router.get("/:id", async (req, res) => {
  const subscribe = await Subcribe.findById(req.params.id);
  res.json(subscribe);
});
router.post("/", async (req, res) => {
  const { email } = req.body;

  const subscribe = new Subcribe({
    email,
  });
  try {
    const savedPost = await subscribe.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
