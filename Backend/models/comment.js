const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  professor_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Professor",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
