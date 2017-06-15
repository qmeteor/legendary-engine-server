/**
 * Created by Bien on 2017-06-15.
 */
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    // adding route handlers app.get
    app.get('/', requireAuth, function(req, res) {
        res.send({ hi: 'there'});
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);

}