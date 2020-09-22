var express = require('express');
var router = express.Router();
var connectDB = require('./connect');
const jwt = require('jsonwebtoken');
var checkCookie = require('../middleware/checkcookie')
/* GET users listing. */
router.get('/', function(req, res, next) {

 res.send({success : req.success})
});

module.exports = router;
