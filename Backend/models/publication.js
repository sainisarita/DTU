const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
  publicationTitle: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  pages: {
    type: String,
    required: true,
  },
  DOI: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
});

module.exports = mongoose.model("Publication", publicationSchema);
