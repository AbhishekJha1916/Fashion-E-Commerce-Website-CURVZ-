const mongoose = require('mongoose');

const product_detailSchema = new mongoose.Schema({
    description:{
        type: String,
    },
    specification:{
       type: String 
    },
    // reviews:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "review",
    //     required: true,
    // }],
});

const ProductDetail = mongoose.model('ProductDetail', product_detailSchema);

module.exports = ProductDetail;