var express = require("express");
var router = express.Router();
var mongo  = require("mongojs");
var db = mongo('mongodb://<host>/<database>',['<collection>'])
//root
router.get("/",function(req,res,next){
    res.render("index.html");
})
//intermediate exceptional routes
router.get("/x",function(r,re,n){
    re.render("x.html");
})
router.post("/x",function(req,res,next){
    var data = req.body;
   
    db.Users.save(data,function(error,r){
        if(error){
            res.send("error");
        }
        res.send("added");
    })
})

router.get("/list",function(req,res,next){
    db.Users.find(function(error,data){
        if(!error){
            res.json(data);
        }
        res.send("dint work! :(");
    });
})


router.get("/clear",function(req,res,next){
    db.Users.remove({});
    res.redirect("/x");
})


//default route
router.get("*",function(r,re,n){
    re.render("index.html");
})
module.exports = router;
