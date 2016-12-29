/**
 * Created by rain on 2016/12/29.
 */
var form = require('./controllers/ctl_form.js');

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.render('home', {
            title: 'Time Magic'
        });
    });

    app.get('/home', function(req, res) {
        res.render('home', {
            title: 'Time Magic'
        });
    });

    app.get('/About', function(req, res) {
        res.render('about', {
            title: 'Time Magic'
        });
    });

    app.get('/contact', function(req, res) {
        res.render('contact', {
            title: 'Time Magic'
        });
    });
    web(app);
    api(app);
}

function web(app) {
    app.get('/', function(req, res) {
        res.render('home', {
            title: 'Time Magic'
        });
    });

    app.get('/home', function(req, res) {
        res.render('home', {
            title: 'Time Magic'
        });
    });

    app.get('/About', function(req, res) {
        res.render('about', {
            title: 'Time Magic'
        });
    });

    app.get('/contact', function(req, res) {
        res.render('contact', {
            title: 'Time Magic'
        });
    });

    app.post('/create_form', function(req, res) {
        form.createForm(req, res);
    })
};

function api(app) {
    app.get('/api/event/:eventId', function (req, res) {
        form.getFormInfo(req, res);
    })
};