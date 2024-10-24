const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const allurls = await URL.find({});
  res.render("Home", { urls: allurls });
});

module.exports = router;
