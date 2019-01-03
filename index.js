var express = require('Express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/run', function(req, res) {
    res.send('You sent ' + req.body.login + ' and ' + req.body.pass);
});

app.listen(3000);