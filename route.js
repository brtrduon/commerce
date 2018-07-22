const Admins = require('./controllers/admins');

module.exports = (app) => {
    app.post('/signin', (req, res) => {
        console.log(req.body);

    })

    app.get('*', (req, res) => {
        res.redirect('http://localhost:3006');
        // change the redirect URL to whatever URL used for deployment
    });
}