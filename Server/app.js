const express= require("express");
const bodyParser=require("body-parser");
const mongoose= require("mongoose");
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
var i =1;
console.log("hello");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({                  //using session
  secret:"our little secret",      //key for hash ans salt.....
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());     //initialize the passport
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/Netflix");

const userSchema=new mongoose.Schema({
  username:String,
  password:String
});

userSchema.plugin(passportLocalMongoose);       //for hash ans salt...

const User=new mongoose.model("User",userSchema);

passport.use(User.createStrategy());                   //
passport.serializeUser(User.serializeUser());         //
passport.deserializeUser(User.deserializeUser());    //

app.get("/",function(req,res){
  res.send("hello");
})
app.post("/home",(req,res)=>{
  console.log(req.body);
  res.redirect("/");
})

app.post("/register",(req,res)=>{
  console.log(req.body);

  User.register({username:req.body.username},req.body.password,function(err,user){
    if(err){
      console.log(err);
      res.redirect("/");
    }else{
      passport.authenticate("local")(req,res,function(){
        res.redirect("/movies");
      })
    }
  })
})


app.post("/login",(req,res)=>{
  console.log(req.body);

  const user=new User({
    username:req.body.username,
    password:req.body.password
  });
  req.login(user,function(err){
    if(err){
      console.log(err);
    }
    else{
      passport.authenticate("local")(req,res,function(){
        res.redirect("/movies");
      })
    }
  })
})









app.listen(5000,function(){
  console.log("Starting the server");
})
