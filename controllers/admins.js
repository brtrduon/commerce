const jwt = require('jwt-simple');
const config = require('../config');
const Admin = require('../models/admin');

function token(admin) {
    const timestamp = new Date().getTime();

    return jwt.encode({
        sub: admin.id,
        iat: timestamp
    }, config.secret);
};

exports.signin = function(req, res, next) {
    // console.log(req.admin);
    res.send({
        token: token(req.user)
        // why I have to put 'req.user' instead of 'req.admin', i have no clue
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