const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mevnBlog")
  .then(() => {
    console.log("db bağlandı");
  })
  .catch((err) => {
    console.log(err);
  });
