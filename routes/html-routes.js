const axios = require("axios");
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function (app) {
    app.post("/faceplus", function (req, res) {
        axios({
            method: 'post',
            url: "https://api-us.faceplusplus.com/facepp/v3/detect",
            data: {
                api_key:
                    api_secret:
                image_base64: `${req.body.image}`,
                return_attributes: 'gender,age,emotion,skinstatus',
            }
        }).then(results => {
            res.json(results);
        }).catch(err => {
            console.log(err);
            res.json(err.message);
        });
    });
}
