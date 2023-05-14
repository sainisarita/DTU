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
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      }


})

module.exports=mongoose.model('Qualification',qualificationSchema)