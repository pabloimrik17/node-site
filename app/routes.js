var express = require('express');

var router = express.Router();
module.exports = router;

// Homepage
router.get('/', function(req, res) {
    res.render('pages/index');
});

// About page
router.get('/about', function(req, res) {
    var users = [
        { name: 'Pablo', email: 'pablo@email.com', avatar: 'http://lorempixel.com/300/300' },
        { name: 'Juan',  email: 'juan@email.com',  avatar: 'http://lorempixel.com/400/400' },
        { name: 'Rafa',  email: 'rafa@email.com',  avatar: 'http://lorempixel.com/500/500' },
        { name: 'Manu',  email: 'manu@email.com',  avatar: 'http://lorempixel.com/600/600' }
    ];

    res.render('pages/about', { users: users });
});

// Contact page
router.get('/contact', function(req, res) {
    res.render('pages/contact');
});

router.post('/contact', function(req, res) {
    res.render('pages/contact', { contactResponse: req.body.name })
});