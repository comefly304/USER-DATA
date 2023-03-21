const {Router}=require('express')
const Usermodel=require('../models/User.model')
const bcrypt=require('bcrypt');
const jwt = require("jsonwebtoken")


const Route=Router()

Route.post('/register',(req,res)=>{
    const {name,email,gender,password}=req.body;
   
    bcrypt.hash(password,5,async function(err,hash){
   if(err){
    res.send('something went wrong or all the fields are required')
   }
   const user=new Usermodel({
    name,
    email,
    gender,
    password:hash
   })
   try{
    await user.save()
    res.json({
        msg:"registered successfully, please login",
        data:user
    })
   }
   catch(err){
    res.status(400).send("something went wrong")
   }
    })

})

Route.get('/get',async (req,res)=>{
    const user=await Usermodel.find()
    res.send(user)
})
Route.get('/get/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await Usermodel.findById(id)
        res.send(user)
    }catch(err){
        res.send("something went wrong")
    }
})

Route.get('/get/:email',async (req,res)=>{
    const {email}=req.params;
    try{
        const user=await Usermodel.findOne({email})
        res.status(200).json({
            data:user
        })
    }catch(err){
        res.status(400).json({
            err:"something went wrong or user doesnt exists"
        })
    }
})

Route.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    const user=await Usermodel.findOne({email})
    const hash=user.password;
    
    bcrypt.compare(password,hash,async function(err,success){
        if(err){
            res.send("something went wrong")
        }if(success){
            const token=jwt.sign({userId:user._id},process.env.JWT_SECRET)
            res.status(200).json({
                msg:"login successful",
                data:user,
                token:token
            })
        }else{
            res.json({
                error:'wrong credentials'
            })
        }
    })
})

  


module.exports={
    Route
}