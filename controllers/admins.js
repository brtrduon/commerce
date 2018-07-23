const Admin = require('../models/admin');
const config = require('../config');
const jwt = require('jwt-simple');

function token(admin) {
    const timestamp = new Date().getTime();

    // console.log(admin);
    return jwt.encode({
        sub: admin.id,
        iat: timestamp
    }, config.secret);
};

exports.signin = function(req, res, next) {
    res.send({
        token: token(req.admin)
    });
};

exports.signup = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    const admin = new Admin({
        username: username,
        password: password
    });

    admin.save((err) => {
        if (err) {
            return next(err);
        }

        res.json({ token: token(admin)});
    })
}