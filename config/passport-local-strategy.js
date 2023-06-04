const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async function(email, password, done){
    try{
        let user = await User.findOne({email: email});
        if(!user || user.password != password){
            console.log('Invalid username or password');
            return done(null, false);
        }
        return done(null,user);
    }catch(err){
        console.log("Error in finding user and establish identity--> Passport");
        return done(err);
    }
}));

// serializing the user to decide which key is to be stored in the cookie
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(async function(id, done){
    try{
        let user = await User.findById(id);
        return done(null, user);
    }catch(err){
        console.log("Error in finding user --> Passport");
        return done(err);
    }
});

//check if the user is authenticated
passport.checkAuthentication = function (req, res, next) {
    //if the user is signed in then pass on the request to the next funtion(controller's action)
    if (req.isAuthenticated()) {
        return next();
    }
    // if the user is not signed in
    return res.redirect('/users/sign-in');
}
passport.setAuthenticatedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        //req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }
    next();
}
module.exports = passport;