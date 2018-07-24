

module.exports = (app) => {
    app.get('*', (req, res) => {
        res.redirect('http://localhost:3006');
        // change the redirect URL to whatever URL used for deployment
    });
}