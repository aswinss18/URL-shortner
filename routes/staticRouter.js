const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const allurls = await URL.find({});
  res.render("Home", { urls: allurls });
});

router.get("/signup", (req, res) => {
  return res.render("SignUp");
});

module.exports = router;
