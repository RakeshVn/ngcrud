var express     = require('express');
var router      = express.Router();
const datamodel = require('../model/mode') 
var assert  	= require('assert');
var db_config	= require('./db_config')

db_config.client.connect(function (err) {
	assert.ifError(err);
});

router.get('/retrieve',(req, res, next)=>{
    datamodel.find(function(err, data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    })
})


router.post('/insert',(req, res, next)=>{
    let newdata = new datamodel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    const query = 'insert into angular (name,email,passwrod) values (?,?,?)';
    const params = [req.body.name,req.body.email,req.body.password];
    db_config.client.execute(query, params, { prepare: true }, function (err) {
        if(err){
            console.log("error in insert_screenname")
        } else {
            console.log("Inserted");
        }
    });

    newdata.save((err, item)=>{
        if(err){
            res.json(err);
        } else{
            res.json({msg : 'Inserted'});
        }
    })
})





module.exports = router;