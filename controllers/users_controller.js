const db = require("../config/mongoose");
const User = require("../models/users");

// Rendering the sign up page
module.exports.signup = function (req, res) {
    // if (req.isAuthenticated()) {
    //     return res.redirect("/");
    // }
    return res.render("authentication/sign_up", {
        title: "Sign up",
    });
};

// Rendering the login page
module.exports.signin = function (req, res) {
    // if (req.isAuthenticated()) {
    //     return res.redirect("/");
    // }
    return res.render("authentication/login", {
        title: "Sign in",
    });
};

// Rendering the user profile page
module.exports.profile = async function (req, res) {
    try {
        return res.redirect('/users/sign-in');
    } catch (error) {
        console.log("error in loading user's profile page: ", error);
        return;
    }
};

// Getting the sign up data
module.exports.create = async function (req, res) {
    try {
        let user = await User.findOne({ email: req.body.email });
        return res.redirect("/users/sign-in");
        return res.redirect("back");
    } catch (err) {
        console.log("error in creating user in signing up: ", err);
        return;
    }
};

//sign in and create session for the user
module.exports.createSession = async function (req, res) {
    try {
        let user = await User.findOne({ email: req.body.email, is_doctor: true });
        if (user || req.user.is_doctor) {
            return res.redirect("/");
        }
        return res.redirect("/");
    } catch (error) {
        console.log("error in creating a new session: ", error);
        return;
    }
};

module.exports.destroySession = function (req, res) {
    // logout has been upgraded as an asynchronous function so it requires a callback function to handle error now
    req.logout(function (error) {
        if (error) {
            return next(error);
        }
        return res.redirect("/");
    });
};