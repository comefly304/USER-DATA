// const PostModel=require('../models/Post.model')
// const {Router}=require('express')

// const Routetwo=Router();

// // Routetwo.post('/create',async (req,res)=>{
// //     const {title,body,device,name}=req.body;
// //     const user=new Postmodel({
// //         title,
// //         body,
// //         device,
// //         name
// //     })
// //     try{
// //      await user.save()
// //      res.json({
// //         msg:'post created successfully',
// //         data:user
// //      })
// //     }catch(err){
// //         res.send('something went wrong')
// //     }
// // })


// Routetwo.post("/create", async (req, res) => {
//     const {title, body, device, userId} = req.body;
//     const note = new PostModel({
//         title,
//         body,
//         device,
//         userId

//     })
//     try{
//         await note.save()
//         res.json({
//             message:"post created successfully",
//             data:note
//         })
//     }
//     catch(err){
//         res.send("something went wrong")
//     }
// })

// module.exports={
//     Routetwo
// }