const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop_controller');

router.get("/mens", shopController.mens);
router.get("/womens", shopController.womens);
router.get("/kids", shopController.kids);
router.get("/products", shopController.product);
router.get("/productdetail/:id", shopController.productdetail);
router.post("/addProduct",shopController.addProducts)

router.get("/addProductPage",shopController.addProductsPage)

module.exports = router;