const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctoralThesesSchema = new Schema({
  student: {
    type:String,
    required:true
  },
    studentTitle: {
    type: String,
    required: true,
  },
  supervisor: {
    type: String,
    required: true,
  },
  supervisorTitle: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  optional: {
    type: String,
    required: false,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
});

module.exports = mongoose.model("DoctoralTheses", doctoralThesesSchema);
