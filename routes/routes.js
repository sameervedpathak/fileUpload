var express = require('express');
var router = express.Router();
var multer = require('multer');


router.get('/', function(req,res,next){
	
 	res.status(200).send("Welcome to our restful API");
});

module.exports = router;

