const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("router loaded");

router.get("/", homeController.home);
router.use('/users', require('./users'));
router.use('/shop', require('./shop'));
// router.use('/help', require('./help'));

module.exports = router;
