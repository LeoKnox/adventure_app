var express = require('Express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('form');
});
