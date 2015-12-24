/*var express = require('express');
var router = express.Router();

//GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
var crypto=require("crypto");
User=require("../models/user.js")
module.exports =function(app){
	app.get("/",function(req,res){
		res.render("index",{title:"Express",supplies:["jade","ejs","html"]});
	})
	app.get("/reg",function(req,res){
		res.render("reg",{title:"注册页面"})
	})
	app.post("/reg",function(req,res){
		var username=req.body.username,
			pwd=req.body.pwd,
			repwd=req.body.repwd;
		if(pwd !==repwd){
			req.flash("error","两次输入的密码不一致");
			return res.redirect("/reg")
		}
		var md5=crypto.createHash("md5"),
			pwd=md5.update(req.body.pwd).digest("hex");
		var newUser=new User({
			username:username,
			pwd:pwd,
			email:req.body.email
		});
		User.get(newUser.username,function(err,user){
			
			if(err){
				console.log("失败")
			}
			newUser.save(function(err,user){
				console.log("ed")
				if(err){

				}
				req.session.user=user;
				req.flash("sucess","注册成功")
				res.redirect("/")
			})
		})

	})
	app.get("/login",function(req,res){
		res.render("login",{title:"登陆页"})
	})
	app.post("/login",function(req,res){
		res.writeHead("200",{"Content-Type":"text/plain;charset=UTF-8"});
		console.log(req.body)
		res.end("提交成功")
		
	})
	app.get("/post",function(req,res){
		res.send("发表")
	})
	app.post("/post",function(req,res){
		
	})
	app.get("/logout",function(req,res){
		
	})
};
