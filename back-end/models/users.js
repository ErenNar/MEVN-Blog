const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    mail: {
      type: String,
      trim: true,
    },
    nick: {
      type: String,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
    },
  },
  { collection: "userTbl" }
);

const User = mongoose.model("userTbl", UserSchema);

module.exports = User;
