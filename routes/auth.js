var express=require('express');
var router=express.Router();
var passport=require('passport');
router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Login Your Account'})
    console.log(res);
});
router.post('/login',passport.authenticate("local",{
    successRedirect:'/',
    failureRedirect:'/login'
}),function(req,res){
})
router.get('/register',function(req,res,next){
    res.render('register',{title:'Regsister Your Account'})
})
module.exports=router;