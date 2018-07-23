const Admins = require('./controllers/admins');
const passport = require('passport');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    app.post('/signin', requireSignin, Admins.signin);

    // app.post('/signup', Admins.signup);

    app.get('*', (req, res) => {
        res.redirect('http://localhost:3006');
        // change the redirect URL to whatever URL used for deployment
    });
}