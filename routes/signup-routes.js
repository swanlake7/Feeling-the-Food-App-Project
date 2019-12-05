var db = require("../models");
var bcrypt = require('bcryptjs');

module.exports = function (app) {
    app.post('/api/users', function (req, res) {
        bcrypt.hash(req.body.pw, 8, function (err, hash) {
            db.User.create({
                email: req.body.email,
                pw: hash
            }).then(function (data) {
                if (data) {
                    res.redirect('/index');
                }
            })
        });
    });

    app.post('/login', function (req, res) {
        console.log('hit')
        var inputemail = req.body.email;
        console.log(req.body);
        db.User.findOne({
            where: {
                email: inputemail,
            }
        }).then(user => {
            if (!user) {
                res.status(401).end();
            } else {
                bcrypt.compare(req.body.pw, user.pw, function (err, success) {
                    if (success === true) {
                        res.json("Success");
                    } else {
                        res.status(401).end();
                    }
                })
            }
        });

    })
}


