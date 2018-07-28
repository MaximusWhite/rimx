const path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { logo_path: path.join('http://localhost:3000/', 'views/images/logo.png') });
});

router.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
