const Product = require("../models/products");

module.exports.mens = function(req, res){
    return res.render("sections/sec_men", {
        title: "mensSection",
    });
};

module.exports.womens = function(req, res){
    return res.render("sections/sec_women", {
        title: "womensSection",
    });
};

module.exports.kids = function(req, res){
    return res.render("sections/sec_kids", {
        title: "kidsSection",
    });
};

module.exports.product = async function(req, res){
    return res.render("products", {
        title: "Product",
    });
};