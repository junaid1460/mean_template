var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = require("./routes/router");

var port = 8000;
var app = express();


////lets define the app

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.engine("html",require("ejs").renderFile);


///public folder


app.use(express.static(path.join(__dirname,"public")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.registerRoutes(app);


////

app.listen(port,function(){
    console.log("Server started! at",port);
})