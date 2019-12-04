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
        var inputpw = bcrypt.hashSync(req.body.pw, 8);
        db.User.findOne({
            where: {
                email: `${inputemail}`,
            }
        }).then(user => {
            if (!user) {
                res.redirect('/');
            } else {
                bcrypt.compare(req.body.pw, user.pw, function (err, result) {
                    if (result == true) {
                        res.redirect('/home');
                    } else {
                        res.send('Incorrect password');
                        res.redirect('/');
                    }
                })
            }
        });

    })
}


