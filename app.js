var bodyParser=require("body-parser"),
mongoose      =require("mongoose"),
express       =require("express"),

app           =express();

mongoose.connect("mongodb://Localhost/rest_full_blog_app");

app.set("view engine","ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

var blogSchema=new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created:{type:Date ,default:Date.now}
});

var Blog=mongoose.model("Blog",blogSchema);

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is running");
})