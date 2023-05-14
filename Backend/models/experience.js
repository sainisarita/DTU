const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  employerName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
});

module.exports = mongoose.model("Experience", experienceSchema);
