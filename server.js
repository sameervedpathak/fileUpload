var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var router = express.Router();

var routes = require("./routes/routes.js");
var userRoute = require("./routes/user/index.js");

var port = 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', routes);
app.use('/api/user',userRoute);

app.listen(port, function(err){
	if(err) throw err;
	console.log("The magic happens on port : " + port );
});
