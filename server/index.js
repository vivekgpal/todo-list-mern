const express = require("express")
const mongoose = require("mongoose");
const Route = require("./routes/User")
const bodyParser = require("body-parser");
const cors = require('cors');              // important to link frontend and backend
const User = require("./models/User");

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://0.0.0.0:27017/todoDB",{useNewUrlParser:true})
.then(()=>{console.log("connected")})
.catch((err)=>console.log(err))

app.use(cors());    // important to link frontend and backend

app.use("/api/auth",Route);


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})