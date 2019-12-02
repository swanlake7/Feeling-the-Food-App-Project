var Sequelize = require("sequelize");

var sequelize = require("../config/config.json");

var Plant = sequelize.define("plant", {
    latinName: Sequelize.STRING,
    commonName: Sequelize.STRING,
    medicinal: Sequelize.STRING,
    knownHazards: Sequelize.STRING,
    edibleUses: Sequelize.STRING,
    usesNotes: Sequelize.STRING,
    edibilityRating: Sequelize.INTEGER,
    medicinalRating: Sequelize.INTEGER
});

Plant.sync();

module.exports = Plant;