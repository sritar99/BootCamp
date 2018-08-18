var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/catapp");

var catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    breed:String
});
 var Cat=mongoose.model("Cat",catSchema);
 
 Cat.create({
     name:"Whiteback",
     age:15,
     breed:"bland"
 },function(err,cats){
    if(err){
        console.log("Something Wrong");
        console.log(err);
    }
    else{
        console.log("yeah we done it!");
        console.log(cats);
    } 
 });
 
 var george=new Cat({
     name:"catyperry",
     age:12,
     breed:"goody"
 });
 george.save(function(err,cat){
     if(err){
         console.log("something Wrong");
     }
     else{
         console.log("we had done it!");
         console.log(cat);
     }
 });


Cat.find({},function(err,cats){
    if(err){
        console.log("Something Wrong");
        console.log(err);
    }
    else{
        console.log("yeah we done it!");
        console.log(cats);
    }
});