const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalInfoSchema = new Schema({
  image: {
    type: Buffer,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  officeNumber: {
    type: String,
    required: true,
  },
  officeAddress: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
});

module.exports = mongoose.model("PersonalInfo", personalInfoSchema);
