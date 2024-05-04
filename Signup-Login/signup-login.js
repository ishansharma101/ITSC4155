var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/CampusMU')
var db=mongoose.connection
db.on('error',()=> console.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Connected to Database"))

app.post("/signup",(req,res)=>{
    var username=req.body.username
    var email=req.body.email
    var password=req.body.password

    var data={
        "username":username,
        "email":email,
        "password":password
    }
    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('login.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('Signup.html')
}).listen(3000);

console.log("Listening on port 3000")

app.post("/login",(req,res)=>{
    var email=req.body.email
    var password=req.body.password

    db.collection('users').findOne({email: email, password: password}, (err, user) => {
        if(err){
            throw err;
        }
        if(user){
            console.log("Login Successful")
            // Here, you can redirect the user to a dashboard or any other page
            return res.redirect('homepage1.html')
        } else {
            console.log("Invalid email or password")
            // You can redirect the user back to the login page with an error message
            return res.redirect('Signup.html')
        }
    })
})