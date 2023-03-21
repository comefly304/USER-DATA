const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    gender:{type:String,required:true},
    password:{type:String,required:true}
},{
    timestamps:true
})

const Usermodel=mongoose.model("Usermodel",UserSchema);

module.exports=Usermodel