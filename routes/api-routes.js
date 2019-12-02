var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function (app) {
    app.get("/api/pain", function (req, res) {
        db.Plant.findAll({
            where: {
                medicinal: {
                    [Op.iLike]: '%analgesic%'
                }
            }
        }).then(function (results) {
            res.json(results);
            console.log(res.json(results));
        });
    });
}