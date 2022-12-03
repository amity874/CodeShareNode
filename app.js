var express=require('express');
var app=express();
var path=require('path');
var indexRoute = require('./routes/index');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', indexRoute);
app.listen(3000,function(err){
    if(err){
        console.log(err);
    }
    console.log("Listenning!!!!!!!!!!");
});
module.exports=app;