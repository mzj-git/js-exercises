var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); 
// create application/json parser  
var jsonParser = bodyParser.json() 
// create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

var datailInfoData = require('../mockData/detail/info.js');
var datailCommentData = require('../mockData/detail/comment.js');

/* GET datail page. */
router.get('/info', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    var params = req.params;
    var query = req.query;
    console.log('params',params)
    console.log('query',query)
    res.json({
        status:"200",
        result:{
            data: datailInfoData
        }             
    })
  
});

router.get('/info/:id', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    var params = req.params;
    var query = req.query;
    console.log('params',params)
    console.log('query',query)
    res.json({
        status:"200",
        result:{
            data: datailInfoData
        }             
    })
  
});

router.get('/comment/:id', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    var params = req.params;
    var query = req.query;
    console.log('params',params)
    console.log('query',query)
    res.json({
        status:"200",
        result:{
            data: datailCommentData
        }             
    })
  
});


module.exports = router;