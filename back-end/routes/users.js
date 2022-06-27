const express = require("express");
const router = express.Router();
const controllerUsers = require("../controller/users");

router.get("/", controllerUsers.allUser);
router.post("/", controllerUsers.addUser);
router.post("/login", controllerUsers.userLogin);

router.get("/all-article", controllerUsers.allArticle);
router.get("/all-article/:id", controllerUsers.oneArticle);

router.get("/art-article", controllerUsers.artArticle);
router.get("/art-article/:id", controllerUsers.oneArt);

router.get("/sport-article", controllerUsers.sportArticle);
router.get("/sport-article/:id", controllerUsers.oneAgenda);

router.get("/agenda-article", controllerUsers.agendaArticle);
router.get("/agenda-article/:id", controllerUsers.oneAgenda);

router.get("/series-article", controllerUsers.seriesArticle);
router.get("/series-article/:id", controllerUsers.oneSeries);

router.get("/limit-article", controllerUsers.limitArticle);
router.post("/article-post", controllerUsers.postArticle);

module.exports = router;
