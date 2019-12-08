var db = require("../models");
var jwt = require("jsonwebtoken");
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
        db.User.findOne({
            where: {
                email: inputemail,
            }
        }).then(user => {
            if (!user) {
                res.status(401).end();
            } else {
                bcrypt.compare(req.body.pw, user.pw, function (err, success) {
                    if (err) { console.log(err) };
                    if (success === true) {
                        //add user id in payload
                        var token = jwt.sign({ email: user.email }, process.env.JWT_KEY, { expiresIn: '1h' })
                        res.json(token);
                    } else {
                        res.status(401).end();
                    }
                })
            }
        });

    })
}


