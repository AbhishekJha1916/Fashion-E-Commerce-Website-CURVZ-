const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async function(email, password, done){
    try{
        let user = await User.findOne({email: email});
        if(!user || user.password != password){
            console.log('Invalid email or password');
            return done(null, false);
        }
        return done(null,user);
    }catch(err){
        console.log("Error in finding user. No establishd identity");
        return done(err);
    }
}));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(async function(id, done){
    try{
        let user = await User.findById(id);
        return done(null, user);
    }catch(err){
        console.log("Error in finding user");
        return done(err);
    }
});

passport.checkAuthentication = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        req.user.password = 'Fuck You :>';
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;