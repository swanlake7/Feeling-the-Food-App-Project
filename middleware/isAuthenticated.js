const db = require("../models");
const jwt = require("jsonwebtoken");


module.exports = function (req, res, next) {
    if (req.url === '/login' || req.url === '/api/users') {
        next();
    } else {
        jwt.verify(req.query.token, process.env.JWT_KEY, (err, authorizedData) => {
            if (err) {
                console.log(err);
                console.log('ERROR: Could not connect to protected route');
                res.sendStatus(401);
            } else {
                console.log(authorizedData)
                //authorizedData is unpacked payload
                db.User.findOne({
                    where: {
                        email: authorizedData.email
                    }
                }).then(function (dbuser) {
                    req.user = dbuser
                    next();
                })
            }
        })
    }
}
