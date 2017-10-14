var express = require('express');

var router = express.Router();
module.exports = router;

// Homepage
router.get('/', function(req, res) {
    res.render('pages/index');
});

// About page
router.get('/about', function(req, res) {
    res.render('pages/about');
});

// Contact page
router.get('/contact', function(req, res) {
    res.render('pages/contact');
});

router.post('/contact', function(req, res) {

});