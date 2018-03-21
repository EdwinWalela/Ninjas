var express = require('express');
var app = express();

var data = require('./data');

app.set('view engine', 'ejs')

app.get('/',function(req,res){
	res.render('index',{data: data.data});
});
app.get('/team',function(req,res){
	res.render('team',{data: data.data});
}); 

app.listen(8080);
