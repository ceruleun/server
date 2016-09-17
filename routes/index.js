var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Сeruleun first tiny server :)' });
});


/* GET home page. */
router.get('/qwe', function(req, res, next) {
  res.render('404', { title: 'Сeruleun first tiny server :)' });
});



module.exports = router;
