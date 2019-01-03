var express = require('Express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/run', function(req, res) {
    res.render('form');
    //res.send('You sent ' + req.body.login + ' and ' + req.body.pass);
});

app.listen(3000);