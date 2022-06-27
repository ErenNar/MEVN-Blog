const express = require("express");
const router = express.Router();

const adminControl = require("../controller/admin");

/* GET home page. */

router.get("/", adminControl.loginGet);
router.post("/login", adminControl.loginPost);

module.exports = router;
