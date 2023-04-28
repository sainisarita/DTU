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
    type: Number,
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
  professor_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Professor"
  }
});

module.exports = mongoose.model("Publication", publicationSchema);
