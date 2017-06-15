/**
 * Created by Bien on 2017-06-15.
 */
const Authentication = require('./controllers/authentication');

module.exports = function(app) {
    // adding route handlers app.get
    app.post('/signup', Authentication.signup);

}