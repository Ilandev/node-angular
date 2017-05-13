var dbconfig = {
    host:'localhost',
    user:'root',
    password:'',
    database:'test1'

}
var express= require('express');
var app = express.Router();
var mysql = require('mysql');

sqlconnect= mysql.createConnection(dbconfig);
sqlconnect.connect();

exports.sql = function(){
    return sqlconnect;
}