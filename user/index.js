var express = require('express');
var router = express.Router();
var user = require('./user')
router.get('/get', user.getUser)

module.exports = router