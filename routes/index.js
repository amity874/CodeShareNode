var express=require('express');
var router =express.Router();
var app=express();
/*Get home Page. */
router.get('/',function(req,res,next){
    res.render('index',{title:'Code4Cause - a platform for sharing code.'});
});
router.get('/about', function (req, res, next) {
    res.render('about', {title: 'Code4Share - a platform for sharing code.'});
});
module.exports=router;
