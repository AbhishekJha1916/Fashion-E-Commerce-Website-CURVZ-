const db = require("../config/mongoose");
const User = require("../models/users");

module.exports.signup = function (req, res) {
    return res.render("authentication/sign_up", {
        title: "Sign up",
    });
};

module.exports.signin = function (req, res) {
    return res.render("authentication/login", {
        title: "Sign in",
    });
};

module.exports.create = async function(req, res){
    try{
        console.log(req.body);
        console.log("Pinging.....");
        // let user = await User.create(req.body);
        return res.redirect("back");
    }
    catch (error){
        console.log("error in creating user in signing up: ", error);
        return;
    }
};