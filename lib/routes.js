'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    kelma = require('./controllers/kelma'),
    middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function (app) {

    app.route('/api/kelma')
        .get(kelma.kollha)
        .post(kelma.gdida);
    app.route('/api/kelma/:kelma')
        .get(kelma.wahda)
        .post(kelma.irranga);
    app.route('/api/suggeriment')
        .get(kelma.suggerimenti)
        .post(kelma.kontribwixxi);
    app.route('/api/illum')
        .get(kelma.kelmaTalLum);

    app.route('/api/users')
        .post(users.create)
        .put(users.changePassword);
    app.route('/api/users/me')
        .get(users.me);
    app.route('/api/users/:id')
        .get(users.show);

    app.route('/api/session')
        .post(session.login)
        .delete(session.logout);

    // All undefined api routes should return a 404
    app.route('/api/*')
        .get(function (req, res) {
            res.send(404);
        });

    // All other routes to use Angular routing in app/scripts/app.js
    app.route('/partials/*')
        .get(index.partials);
    app.route('/*')
        .get(middleware.setUserCookie, index.index);
};