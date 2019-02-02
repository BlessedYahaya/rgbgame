//define express
var express = require("express"),
        app = express();
        
//set view engine
app.set("view engine", "ejs");
//make express allow external stylesheet
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("index")
})




//call server to start
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server is Up");
})