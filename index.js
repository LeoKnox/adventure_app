var express = require('Express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {name:"Giger", atk:"15", def:"15"};
    dbo.collection("chars").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log('dbo');
        db.close();
    });
});

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/run', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("chars").findOne({_id: 0}, function(err, result) {
            if (err) throw err;
            console.log(result.name);
            res.render('form', {result:result});
            db.close();
        });
    });
    //res.send('You sent ' + req.body.login + ' and ' + req.body.pass);
    //res.render('form', {result:result});
});

app.listen(3000);