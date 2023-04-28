const mongoose=require('mongoose')
const Schema=mongoose.Schema

const qualificationSchema=new Schema({
    degreeName:{
        type:String,
        required:true
    },
    graduationSubject:{
        type:String,
        required:true
    },
    graduationCollege:{
        type:String,
        required:true
    },
    graduationYear:{
        type:String,
        required:true
    },
    processor_id:{
        type:Schema.Types.ObjectId,
        ref:'Professor',
        required:true
    }


})

module.exports=mongoose.model('Qualification',qualificationSchema)