var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController');
const RequireNotLoginMiddleware = require('../utils/RequireNotLoginMiddleware');

/* GET home page. */
router.use(RequireNotLoginMiddleware);
router.route('/').get(AuthController.showLogin);
router.route('/login').post(AuthController.attemptLogin);
router.route('/signup').get(AuthController.signup);
router.route('/connect_jwt').get(AuthController.connect_jwt);

module.exports = router;
