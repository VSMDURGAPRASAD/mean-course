var express =require('express');
var mongoose=require('mongoose');
var cors=require('cors');
var path=require('path');
var bodyparser=require('body-parser');
var app=express();
const port=3000;
const route =require('./routes/route');
//middleware
app.use(cors());
//body parser
app.use(bodyparser.json());
app.get('/',(req,res) =>{
    res.send("Hello Prasad");
})
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected',() =>{
    console.log("Database connected");
})
mongoose.connection.on('error',(err) =>{
    if (err){
        console.log(err);
    }
    console.log("Database connected");


});

//Static Files 
app.use(express.static(path.join(__dirname,'public')));
//Routes
app.use('/api',route);
app.listen(port,() =>{
    console.log("Server started"+port);

});