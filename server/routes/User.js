const router = require("express").Router();
const mongoose = require("mongoose");
const express = require("express")
const User = require("../models/User");
const bodyParser = require("body-parser");
const app = express();

//register

router.post("/register",async(req,res)=>{
    try{
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        });
        const user = await newUser.save();
        res.status(200).json(user);
        

    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});


//login
router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({username : req.body.username});
        !user && res.status(400).json("First register then try to login");
        
        (user.password==req.body.password) ? res.status(200).json(user) : res.status(500).json("wrong password");
    } 
    catch(err){
        console.log(err);
    }
})
router.get("/",(req,res)=>{
    res.send("This is About page"); 
})



module.exports = router;