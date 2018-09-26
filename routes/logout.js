var express = require('express');
var router = express.Router();

const AuthController = require('../controllers/AuthController');
const RequireLoginMiddleware = require('../utils/RequireLoginMiddleware');

router.use(RequireLoginMiddleware);
router.route('/').get(AuthController.logout);

module.exports = router;
