var express       = require('express');
var mongoose      = require('mongoose');
var bodyparser    = require('body-parser');
var cors          = require('cors');
const route      = require('./route/routes');

var app = express();

mongoose.connect('mongodb://localhost:27017/')

//mongoose_connect
mongoose.connection.on('connected',()=>{
    console.log("mongoose connected");
})

//mongoose_check
mongoose.connection.on('error',(err)=>{
    console.log(err);
})

//middleware
app.use(cors());

app.use(bodyparser.json());

app.use('/api',route);


app.get('/',(req,res)=>{
    res.send("Yo")
})

const PORT = 3010;

app.listen(PORT, ()=>{
    console.log("Server started")
});