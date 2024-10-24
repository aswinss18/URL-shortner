const express = require("express");
const { handleUserSignup, handleUserLoginUp } = require("../controllers/user");

const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserLoginUp);

module.exports = router;
