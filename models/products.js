const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    path:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    //discount is in percentage
    discount:{
        type: String,
        required: true,
    },
    //uncomment when the product detail schema is ready
    // detailid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "productdetail",
    //     required: true,
    // }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;