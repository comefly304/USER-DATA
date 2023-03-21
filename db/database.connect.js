

const mongoose=require('mongoose');

function Connection(){
    mongoose.connect(`mongodb+srv://express:1234@cluster0.lnfyel0.mongodb.net/?retryWrites=true&w=majority`)
    .then(console.log('mongodb connected successfully'))
}

module.exports=Connection