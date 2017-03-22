var passport = require('passport'),
    mongoose = require('mongoose'),
    dailyLog = require("../models/user.server.model");

module.exports = function() {
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done) {
        console.log('called 1');
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({
            _id: id
        }, '-password -salt', function(err, user) {
            console.log('called 2');
            done(err, user);
        });
    });

    require('./strategy/local.js')();
};