const mongoose = require("mongoose");

const adminSetting = new mongoose.Schema(
  {
    mail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "adminTbl" }
);

const Admin = mongoose.model("adminTbl", adminSetting);

module.exports = Admin;
