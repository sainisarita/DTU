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

  professsor_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Professor",
  },
});

module.exports = mongoose.model("Expertise", expertiseSchema);
