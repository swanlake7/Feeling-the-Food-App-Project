const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function(app) {
  const sleep = ["sleep", "nervine", "narcotic", "hypnotic"];
  const muscle = ["muscle", "nutritive", "lenitive", "antiphlogistic"];
  const focus = ["focus", "stimulant", "alterative"];
  const energy = ["energy", "tonic", "stimulant"];

  const sleepConditions = sleep.join("|");
  const muscleConditions = muscle.join("|");
  const focusConditions = focus.join("|");
  const energyConditions = energy.join("|");

  // const query = {
  //   medicinal: {
  //     [Op.regexp]: medicinalConditions
  //   }
  // };

  app.get("/api/all", (req, res) => {
    db.filtered_data.findAll({ limit: 30 }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/mood/:medicinal", function(req, res) {
    console.log(db);
    console.log(req.params.medicinal);
    db.filtered_data
      .findAll({
        limit: 5,
        where: {
          Medicinal: {
            [Op.like]: `%${req.params.medicinal}%`
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
            [Op.regexp]: sleepConditions
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
            [Op.regexp]: muscleConditions
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
            [Op.regexp]: focusConditions
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
            [Op.regexp]: energyConditions
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
