const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patentSchema = new Schema({
  patentTitle: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
    required: true,
  },
  patentNumber: {
    type: String,
    required: true,
  },
  collaboration: {
    type: String,
    required: true,
  },
  fillingDate: {
    type: String,
    required: true,
  },
  grantDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
});

module.exports = mongoose.model("Patent", patentSchema);
