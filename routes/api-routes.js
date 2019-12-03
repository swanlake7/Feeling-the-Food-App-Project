const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function (app) {
    app.get("/api/pain", function (req, res) {
        console.log(db);
        db.filtered_data.findAll({
            where: {
                Medicinal: {
                    [Op.like]: '%analgesic%'
                }
            },
            order: [["EdibilityRating", "DESC"]]
        }).then(function (results) {
            res.json(results);
        });
    });
}