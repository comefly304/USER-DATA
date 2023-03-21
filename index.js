const express =require('express')
const Connection=require('./db/database.connect');
// const { Routetwo } = require('./routes/Post.route');
const app=express();
require("dotenv").config()
const {Route}=require('./routes/User.route')


app.use(express.json())
app.use('/user',Route)
// app.use('/post',Routetwo)


const PORT=8080;
app.listen(PORT,async()=>{
    try{
        await Connection()
    console.log(`server is listening in ${PORT}`)
    }catch(err){
        console.log('could not able to connect mongodb',err)
    }
}
   
)