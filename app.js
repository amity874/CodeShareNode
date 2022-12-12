var express=require('express');
var app=express();
var path=require('path');
var mongoose=require('mongoose');
var passport=require('passport');
var indexRoute = require('./routes/index');
var authRoute  = require('./routes/auth');
var config=require('./config');
require('./passport');
mongoose.connect(config.dbConnstring);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
app.use('/', indexRoute);
app.use('/',authRoute);
app.listen(3000,function(err){
    if(err){
        console.log(err);
    }
    console.log("Listenning!!!!!!!!!!");
});
module.exports=app;