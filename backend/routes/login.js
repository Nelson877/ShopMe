const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const Joi = require("joi");
const express = require("express");
const generteAuthToken = require("../utils/generteAuthToken");
const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).require().email(),
    password: Joi.string().min(6).max(200).require(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password...");

  const validaPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validaPassword)
    return res.status(400).send("Invalid email or password....");

  const token = generteAuthToken(user);

  res.send(token);
});

module.exports = router;
