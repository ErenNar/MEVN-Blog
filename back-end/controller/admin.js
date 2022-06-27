const Users = require("../models/users");
const Posts = require("../models/post");

const loginGet = (req, res, next) => {
  res.render("./login/index.ejs");
};

const loginPost = async (req, res, next) => {
  const defaultName = "admin@hotmail.com";
  const defaultPassword = "admin";
  const mail = req.body.mail;
  const password = req.body.password;
  try {
    if (mail == defaultName && password == defaultPassword) {
      res.redirect("/dashboard");
    } else {
      res.send(mail + defaultName + defaultPassword + password);
      //res.redirect('/admin')
    }
  } catch (error) {
    next(error);
  }
};

const dashboardGet = (req, res, next) => {
  res.render("index.ejs");
};

const allUsers = async (req, res, next) => {
  try {
    const allUser = await Users.find({});
    return res.render("./layout/allUsers.ejs", { allUser: allUser });
  } catch (error) {
    next(error);
  }
};

const allPosts = async (req, res, next) => {
  try {
    const allPost = await Posts.find({});
    return res.render("./layout/allPost.ejs", { allPost: allPost });
  } catch (error) {
    next(error);
  }
};

const detailPost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const findID = await Posts.findById(id);
    return res.render("./layout/postDetail.ejs", { findID: findID });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const deleteID = req.params.id;
    const findDelete = await Posts.findByIdAndDelete(deleteID);
    res.redirect("/dashboard/all-posts");
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deleteID = req.params.id;
    const findDelete = await Users.findByIdAndDelete(deleteID);
    res.redirect("/dashboard/all-user");
  } catch (error) {
    next(error);
  }
};

const search = async (req, res, next) => {
  try {
    const data = req.body;
    if (data.length > 0) {
      const ara = await Posts.find(function (err, result) {
        if (err) {
          console.log(err);
        } else {
          result.forEach((item) => {
            item.articleTitle;
          });
        }
      });
    }
  } catch (error) {}
};
module.exports = {
  loginGet,
  loginPost,
  dashboardGet,
  allUsers,
  allPosts,
  detailPost,
  deletePost,
  deleteUser,
  search,
};
