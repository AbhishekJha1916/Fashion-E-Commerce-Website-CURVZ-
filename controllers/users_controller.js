
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
        const usercheck = await User.findOne({email: req.body.email}); // every user must have a unique email id
        if(!usercheck){
            await User.create(req.body);
            console.log("User created")
        }
        else{
            console.log("User exists");
            return res.redirect('back');
        }
        return res.redirect('/users/sign-in');
    }
    catch(err){
        console.log(err);
    }   
};