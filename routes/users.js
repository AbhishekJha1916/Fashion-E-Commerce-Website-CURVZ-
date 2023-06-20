const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/users_controller');

router.get('/sign-up', usersController.signup);
router.get('/sign-in', usersController.signin);
router.post('/create', usersController.create);

module.exports = router;