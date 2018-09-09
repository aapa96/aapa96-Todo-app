var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// * HTTP Headers *

app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT , DELETE');
	res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
	next();
});



// * Routes *

var todo_routes = require('./Todo/route');

// * Base Routes *
app.use('/api',todo_routes);


module.exports=app;