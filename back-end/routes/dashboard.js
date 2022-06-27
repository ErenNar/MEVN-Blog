const express = require("express");
const router = express.Router();

const adminControl = require("../controller/admin");

router.get("/", adminControl.dashboardGet);
router.get("/all-posts", adminControl.allPosts);
router.get("/all-posts/:id", adminControl.detailPost);
router.post("/all-posts/:id", adminControl.deletePost);

router.get("/all-users", adminControl.allUsers);
router.post("/all-users/:id", adminControl.deleteUser);

module.exports = router;
