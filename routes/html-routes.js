const axios = require("axios");
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname + "./public/index.html"));
};

