const mongoose = require("mongoose");

async function connectMongoDB(url) {
  return mangoose.connect(url);
}

module.exports = { connectMongoDB };
