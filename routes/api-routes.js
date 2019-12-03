const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function(app) {
  app.get("/api/pain", function(req, res) {
    console.log(db);
    db.filtered_data
      .findAll({
        limit: 5,
        where: {
          Medicinal: {
            [Op.like]: "%analgesic%"
          }
        },
        order: [["EdibilityRating", "DESC"]]
      })
      .then(function(results) {
        res.json(results);
      });
  });

  app.get("/api/sleep", function(req, res) {
    console.log(db);
    db.filtered_data
      .findAll({
        limit: 5,
        where: {
          Medicinal: {
            [Op.like]: "%sleep%"
          }
        },
        order: [["EdibilityRating", "DESC"]]
      })
      .then(function(results) {
        res.json(results);
      });
  });

  app.get("/api/muscle", function(req, res) {
    console.log(db);
    db.filtered_data
      .findAll({
        limit: 5,
        where: {
          Medicinal: {
            [Op.like]: "%muscle%"
          }
        },
        order: [["EdibilityRating", "DESC"]]
      })
      .then(function(results) {
        res.json(results);
      });
  });

  app.get("/api/focus", function(req, res) {
    console.log(db);
    db.filtered_data
      .findAll({
        limit: 5,
        where: {
          Medicinal: {
            [Op.like]: "%stimulant%"
          }
        },
        order: [["EdibilityRating", "DESC"]]
      })
      .then(function(results) {
        res.json(results);
      });
  });
  app.get("/api/energy", function(req, res) {
    console.log(db);
    db.filtered_data
      .findAll({
        limit: 5,
        where: {
          Medicinal: {
            [Op.like]: "%energy%"
          }
        },
        order: [["EdibilityRating", "DESC"]]
      })
      .then(function(results) {
        res.json(results);
      });
  });

  // Search by common name
  app.get("/api/pain/:Commonname", function(req, res) {
    db.filtered_data
      .findOne({
        where: {
          Commonname: req.params.Commonname
        }
      })
      .then(function(results) {
        res.json(results);
      });
  });
};
