const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const awardSchema = new Schema({
  awardName: {
    type: String,
    required: true,
  },
  awardDate: {
    type: String,
    required: true,
  },
  awardOrganization: {
    type: String,
    required: true,
  },
  optional:{
    type:String,
    required:false
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Award", awardSchema);
