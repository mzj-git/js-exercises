var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); 
// create application/json parser  
var jsonParser = bodyParser.json() 
// create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

var homeAdData = require('../mockData/home/ad.js')
var homeListData = require('../mockData/home/list.js')

/* GET home page. */
router.get('/ad', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    
    res.json({
        status:"200",
        result:{
            data: homeAdData
        }             
    })
  
});

router.post('/ad', function(req, res, next) {
    let data = req.body;
    console.log(data)
    res.json({
        status:"200",
        result:{
            data: data
        }             
    })
  
});

router.get('/list', function(req, res, next) {   
    res.json({
        status:"200",
        result:{
            data: homeListData
        }             
    })  
});


router.post('/form', urlencodedParser, function(req, res, next) {    
    if (!req.body) return res.sendStatus(400);
    res.json({
        status:"200",
        result:{
            data: req.body
        }             
    })
    console.log(req.body)
});  

module.exports = router;