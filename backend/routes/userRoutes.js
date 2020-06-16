const router = require("express").Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

router.use(cors());
//REGISTER API
process.env.TOKEN = "secret";
router.post("/register", async (req, res) => {
  //Check email if already exist
  const emialExist = await User.findOne({ email: req.body.email });

  if (emialExist) return res.status(400).send("Email already Exist");

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const saveUser = await user.save();
    res.json(saveUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//LOGIN API
router.post("/login", async (req, res) => {
  //Check email if already exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist!");

  //CHECK PASSWORD
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password");

  //TOKEN
  try {
    const payload = {
      _id: user._id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    };

    const token = jwt.sign(payload, process.env.TOKEN);
    res.header("authorization", token).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
});

//LOGOUT
router.post("/logout", (req, res) => {});

//PROFILE
router.get("/admin", async (req, res) => {
  const decode = jwt.verify(req.headers["authorization"], process.env.TOKEN);

  const user = await User.findOne({ _id: decode._id });
  if (!user) return res.status(400).send("fail");

  try {
    res.json(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
