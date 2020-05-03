const router = require("express").Router();
const BookNow = require("../models/bookNowModel");

router.get("/", async (req, res) => {
  const bookNow = await BookNow.find();
  res.json(bookNow);
});
router.get("/:id", async (req, res) => {
  const bookNow = await BookNow.findById(req.params.id);
  res.json(bookNow);
});
router.post("/", async (req, res) => {
  const {
    startDate,
    pickTime,
    first_name,
    last_name,
    email,
    phone,
    address,
    city,
    stateValue,
    postal_code,
  } = req.body;

  const bookNow = new BookNow({
    startDate,
    pickTime,
    first_name,
    last_name,
    email,
    phone,
    address,
    city,
    stateValue,
    postal_code,
  });
  try {
    const savedPost = await bookNow.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
