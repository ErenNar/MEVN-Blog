const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    articleImg: {
      type: String,
      trim: true,
      required: true,
    },
    articleTitle: {
      type: String,
      trim: true,
      required: true,
    },
    articleSubtitle: {
      type: String,
      trim: true,
      required: true,
    },
    articleText: {
      type: String,
      trim: true,
      required: true,
    },
    articleCatagory: {
      type: String,
      required: true,
    },
    articleDate: String,

    articleSlug: String,
  },
  { collection: "articleTbl", timestamps: true }
);

const Articles = mongoose.model("articleTbl", PostSchema);

module.exports = Articles;
