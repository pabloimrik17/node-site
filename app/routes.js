var express = require('express');
var path = require('path');

var router = express.Router();
module.exports = router;

// Homepage
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// About page
router.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '../about.html'));
});

// Contact page
router.get('/contact', function(req, res) {
    res.send('Contact Page!');
});