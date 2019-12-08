const db = require("../models");
const Op = db.Sequelize.Op;

//$.get("url?token="+token) to pass token in url
//make model for favorite plants tables

module.exports = function (app) {
    app.post("/user/favorites/:plant", (req, res) => {
        //create row in table of favorite plants for user
    });

    app.get("/user/favorites", (req, res) => {
        console.log(req.user);
        //get all rows of user favorites table
    });
}