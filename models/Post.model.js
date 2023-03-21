const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    device:{type:String},
    name:{type:String,required:true}
},{
    timestamps:true
})

const PostModel=mongoose.model("Posts",PostSchema)

module.exports=PostModel