var express = require('express');
var app = express.Router();


app.get('/',function(req,res){
res.render('index.html');
});

app.get('/getUsers',function(req,res){

mysql.query('SELECT username FROM users',function(err,result,fields){

});
});
module.exports= app;