const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const awardSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date.now(),
    required: true,
  },
  professor_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Professor",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
