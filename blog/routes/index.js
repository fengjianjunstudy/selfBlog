/*var express = require('express');
var router = express.Router();

//GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports =function(app){
	app.get("/",function(req,res){
		res.render("index",{title:"Express",supplies:["jade","ejs","html"]});
	})
	app.get("/:xxx",function(req,res){
		res.send("hello world");
	})
	app.get("/reg",function(req,res){
		res.send("注册")
	})
	app.post("/reg",function(req,res){
		
	})
	app.get("/login",function(req,res){
		res.send("登陆")
	})
	app.post("/login",function(req,res){
		
	})
	app.get("/post",function(req,res){
		res.send("发表")
	})
	app.post("/post",function(req,res){
		
	})
	app.get("/logout",function(req,res){
		
	})
};
