var express = require ("express")
var router = express.Router()
var bodyParser = require('body-parser')
router.use( bodyParser.json() );    

router.get ('/user', function (req, res){

    res.send ({uname: "vijeesh", email:"test@test.com"})
})

  
router.post('/user', function(req, res){
  
    var params  = req.body;

    console.log(params.uname);
    console.log(params.email);

  
  });
  
  

module.exports = router