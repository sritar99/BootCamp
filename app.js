var express=require("express");
var app=express();
app.get("/",function(req,res){
    console.log("someone typed /");
    res.send("welcome to my assignment");
});
//app.get("/speak/siri",function(req,res){
//    console.log("someone typed /speak/siri");
//    res.send("welcome to my new assistant Siri");
//});
//app.get("/speak/okgoogle",function(req,res){
//    console.log("someone typed /speak/okgoogle");
//    res.send("welcome to my new assistant okgoogle");
//});

app.get("/speak/:ass",function(req,res){
    var ass=req.params.ass;
    var sound="";
    if(ass=="siri") {
        sound="siri";
    }
        if(ass=="okgoogle"){
            sound="okgoogle";
        }
        console.log("someone typed /speak/"+sound);
    res.send("welcome to my new assistant "+ " "+sound);

});
app.get("*",function(req,res){
    console.log("someone typed other,what do u want?");
    res.send("welcome to my assignment");
});

app.listen(process.env.PORT,function(){
    console.log("Server has started");
});