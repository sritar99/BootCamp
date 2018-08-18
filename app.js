var express=require("express");
var app=express();

app.get("/",function(req,res){
    console.log("some one opened the page");
    res.render("home.ejs")
})
app.listen(process.env.PORT,function(){
    console.log("Sever is listenening");
});