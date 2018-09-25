var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController');

/* GET home page. */
router.route('/').get(AuthController.showLogin);
router.route('/login').post(AuthController.attemptLogin);

module.exports = router;
