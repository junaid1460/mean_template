var index = require("./index");
 function registerRoutes(app){
    app.use("/",index);
}
module.exports.registerRoutes = registerRoutes;