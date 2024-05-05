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

    db.collection('users').findOne({$or: [{email: email}, {username: username}]}, (err, existingUser) => {
        if(err){
            throw err;
        }
        if(existingUser){
            console.log("Email or username already exists. Please choose another.")
            return res.redirect('signup.html?error=duplicate')
        } else {
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
                return res.redirect('login.html')
            })
        }
    })
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
            //TO-DO: Adjust where user is redirected after signing in.
            return res.redirect('Dashboard.html')
        } else {
            console.log("Invalid email or password")
            return res.redirect('Signup.html')
        }
    })
})


app.post("/createEvent",(req,res)=>{
    var eventName=req.body.eventName
    var eventSize=req.body.eventSize
    var eventLocation=req.body.eventLocation
    var eventDate=req.body.eventDate
    

    db.collection('events').findOne({eventName: eventName, eventSize: eventSize, eventLocation: eventLocation, eventDate, eventDate}, (err, events) => {
        {
            var data={
                "eventName":eventName,
                "eventSize":eventSize,
                "eventLocation":eventLocation,
                "eventDate": eventDate
            }
            db.collection('events').insertOne(data,(err,collection) => {
                if(err){
                    throw err;
                }
                console.log("Event Inserted Successfully")
                return res.redirect('Events.html')
            })
        }
    })
})

app.get("/getEvents", (req, res) => {
    db.collection('events').find({}).toArray((err, events) => {
        if (err) {
            res.status(500).send("Error fetching events");
            return;
        }
        res.json(events);
    });
});