var express = require('express');

var router = express.Router();

module.exports = router;

// Homepage
router.get('/', function(req, res) {
    res.send('Home Page!');
});

// About page
router.get('/about', function(req, res) {
    res.send('About Page!');
});

// Contact page
router.get('/contact', function(req, res) {
    res.send('Contact Page!');
});

