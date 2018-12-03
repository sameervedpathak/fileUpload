var express = require('express');
var router = express.Router();
var multer = require('multer');
var assert = require('assert');

/*  
* File Upload using multer
*/

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.png');
    }
});

var upload = multer({storage: storage});

/* 
* sample API to test get API 
*/

router.get('/', function (req, res) {
	res.status(200).send('User default route calling !!');
})


/*
* API to upload file 
*/

router.post('/fileUpload', upload.single('image'), (req, res, next) => {
  console.log("fileUpload API Calling !!");
   
   /* db operation code */

   res.json({'message': 'File uploaded successfully'});
});

module.exports = router;