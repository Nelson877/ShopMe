const mongoose = require("mongoose");
const { string } = require("yup");

const userSchema = new mongoose.Schema(
  {
    name: { type: string, required: true, minlength: 3, maxlength: 30 },
    email: {
      type: string,
      required: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    password: { type: string, required: true, minlength: 3, maxlength: 1024 },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

exports.User = User;
