const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expertiseSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
});

module.exports = mongoose.model("Expertise", expertiseSchema);
