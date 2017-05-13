var express = require('express');
var app = express();
var path= require('path');

app.set('views',__dirname+'/views');
app.use(express.static(path.join(__dirname,'public')));
app.engine('html',require('ejs').renderFile)
app.listen(7085,function(){
    console.log('server started');
});

var index = require('./routes/index');
var mysql = require('./routes/mysql');
mysqli= mysql.sql;
app.use('/',index);

