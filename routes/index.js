var express = require('express');
var router = express.Router();
var query = require('../db/query');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/memorial', (req, res, next) => {
  query.getAllDeadCats().then(cats => {
    res.json(cats);
  });
});

router.get('/happiness', (req, res, next) => {
  query.getAllLivingCats().then(cats => {
    res.json(cats);
  });
});


module.exports = router;
