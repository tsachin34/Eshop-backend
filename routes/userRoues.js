const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ message: "User already exists." });
  } else {
    const newuser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      await newuser.save();
      res.send("User Registration Success ");
    } catch (err) {
      return res.status(500).send("Something went wrong");
    }
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const userdata = {
      name: user.name,
      _id: user._id,
      email: user.email,
    };
    console.log(userdata);
    return res.send(userdata);
  } else {
    return res.status(500).send("Invalid Credentials");
  }
});

module.exports = router;
