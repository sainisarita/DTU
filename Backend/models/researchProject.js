const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const researchProjectSchema=new Schema({
    projectTitle: {
        type: String,
        required: true,
      },
      researcherName: {
        type: String,
        required: true,
      },
      institutionalAffiliation: {
        type: String,
        required: true,
      },
      projectSummary: {
        type: String,
        required: true,
      },
      fundingSource: {
        type: String,
        required: true,
      },
      grantNumber: {
        type: String,
        required: true,
      },
      collaboration: {
        type: String,
        required: true,
      },
      timeLine: {
        type: String,
        required: true,
      },
      optionalField: {
        type: String,
        required: false,
      },
      user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      }
})

module.exports=mongoose.model('ResearchProject',researchProjectSchema)