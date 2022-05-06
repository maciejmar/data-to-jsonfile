const mongoose  = require('mongoose');

const dialogSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true
  },
  textName: {
    type: String,
    required: true
  },
  pl:{
    type: String,
    required: true
  },
  en:{
    type: String,
    required: true
  },
  de:{
    type: String,
    required: true
  }


});
module.exports = mongoose.model('Dialog',dialogSchema);
