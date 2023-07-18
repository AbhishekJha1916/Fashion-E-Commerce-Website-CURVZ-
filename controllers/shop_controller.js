const Product = require("../models/products");
const ProductDetail = require("../models/product_detail");

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
    let productdata= await Product.find({});

    return res.render("products", {
        title: "Product", productdata
    });
};
module.exports.productdetail = async function(req, res){

    let productdata= await Product.findById(req.params.id).populate('detailid');
    return res.render("product_details", {
        title: "Product Detail", productdata
    });
};

module.exports.addProducts = async (req, res) => {
    let productName = req.body.productName;
    let existingProductUpdate = await Product.findOneAndUpdate(
      { productName: productName },
      req.body
    );
    if (existingProductUpdate) {
      console.log("Updated");
    } else {
      try {
        await Product.create(req.body);
      } catch (err) {
        console.log("Error in creating product: ", err);
        return res.json({ Error: err });
      }
    }
    return res.redirect("back");
  };
  
  module.exports.addProductsPage = async (req, res) => {
    return res.render("temp/addProduct", {
      title: "Product Add",
    });
  };
  