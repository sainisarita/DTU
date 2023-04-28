const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalInfoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  officeNumber: {
    type: String,
    required: true
  },
  officeAddress: {
    type: String,
    required: true
  },
  professor_id: {
    type: Schema.Types.ObjectId,
    ref: 'Professor',
    required: true
  }
});

module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
