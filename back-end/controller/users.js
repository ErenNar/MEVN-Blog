const User = require("../models/users");
const Articles = require("../models/post");

const jwt = require("jsonwebtoken");
const slugify = require("slugify");

const allUser = (req, res, next) => {};

const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    const addUser = await new User(data);
    addUser.save();
  } catch (error) {
    next(error);
  }
};

const userLogin = async (req, res, next) => {
  try {
    const nick = req.body.nick;
    const password = req.body.password;

    const UserFind = await User.findOne({ nick: nick, password: password });
    if (UserFind) {
      // res.redirect('http://localhost:3000/register')
      console.log("kullanıcı bulundu");
      const payload = {
        nick: UserFind.nick,
        password: UserFind.password,
      };
      const token = jwt.sign(payload, "my-token", { expiresIn: 604800 });
      res.status(200).json({ success: true, token: token });
      console.log(token);
      return true;
    } else {
      console.log("kullanıcı yok");
      return false;
    }
  } catch (error) {}
};

const postArticle = async (req, res, next) => {
  try {
    const userID = req.params.id;
    const articleImg = req.body.articleImg;
    const articleTitle = req.body.articleTitle;
    const articleSubTitle = req.body.articleSubTitle;
    const articleText = req.body.articleText;
    const articleCatagory = req.body.articleCatagory;
    const articleDate = new Date().toLocaleDateString();
    const articleSlug = slugify(req.body.articleTitle);

    const addArticle = await new Articles({
      userID: userID,
      articleImg: articleImg,
      articleTitle: articleTitle,
      articleSubtitle: articleSubTitle,
      articleText: articleText,
      articleCatagory: articleCatagory,
      articleDate: articleDate,
      articleSlug: articleSlug,
    });
    addArticle.save();

    res.status(200).json(addArticle);
  } catch (error) {
    console.log(error);
  }
};

const allArticle = async (req, res, next) => {
  try {
    const all = await Articles.find({}).sort([["updatedAt", "descending"]]);
    res.json(all);
  } catch (error) {
    next(error);
  }
};

const oneArticle = async (req, res, next) => {
  try {
    const findArticle = await Articles.findById(req.params.id);
    res.json(findArticle);
  } catch (error) {
    next(error);
  }
};

const limitArticle = async (req, res, next) => {
  try {
    const limit = await Articles.find({})
      .limit(5)
      .sort([["updatedAt", "descending"]]);
    res.json(limit);
  } catch (error) {
    next(error);
  }
};

const artArticle = async (req, res, next) => {
  try {
    const art = await Articles.find({ articleCatagory: "art" });
    res.status(200).json(art);
  } catch (error) {
    next(error);
  }
};

const oneArt = async (req, res, next) => {
  try {
    const findArt = await Articles.findById(req.params.id);
    res.json(findArt);
  } catch (error) {
    next(error);
  }
};

const sportArticle = async (req, res, next) => {
  try {
    const art = await Articles.find({ articleCatagory: "sport" });
    res.status(200).json(art);
  } catch (error) {}
};

const oneSport = async (req, res, next) => {
  try {
    const findSport = await Articles.findById(req.params.id);
    res.json(findSport);
  } catch (error) {
    next(error);
  }
};

const agendaArticle = async (req, res, next) => {
  try {
    const agenda = await Articles.find({ articleCatagory: "agenda" });
    res.status(200).json(agenda);
  } catch (error) {}
};

const oneAgenda = async (req, res, next) => {
  try {
    const findAgenda = await Articles.findById(req.params.id);
    res.json(findAgenda);
  } catch (error) {
    next(error);
  }
};

const seriesArticle = async (req, res, next) => {
  try {
    const series = await Articles.find({ articleCatagory: "series" });
    res.status(200).json(series);
  } catch (error) {}
};

const oneSeries = async (req, res, next) => {
  try {
    const findSeries = await Articles.findById(req.params.id);
    res.json(findSeries);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  allUser,
  addUser,
  userLogin,
  postArticle,
  allArticle,
  limitArticle,
  oneArticle,
  artArticle,
  sportArticle,
  agendaArticle,
  seriesArticle,
  oneArt,
  oneSport,
  oneAgenda,
  oneSeries,
};
