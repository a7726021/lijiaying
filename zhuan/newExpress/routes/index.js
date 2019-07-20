var express = require('express');
var router = express.Router();
let userData = require("../json/user.json")
// console.log(userData)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  req.header("Access-Control-Allow-Origin","*")
  res.json(userData);
});

module.exports = router;
