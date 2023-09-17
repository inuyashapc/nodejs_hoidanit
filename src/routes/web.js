const express = require("express");
const {
  getHomepage,
  getABC,
  getHoidanIt,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/abc", getABC);

router.get("/hoidanit", getHoidanIt);

module.exports = router;
