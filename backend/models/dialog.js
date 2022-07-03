const mongoose  = require('mongoose');

const dialogSchema = new mongoose.Schema({
  dialogName: {
    type: String,
    required: true
  },
  part:[{
      textName: {
        type: String,
        required: true
      },
      fileName: {
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
  }]


});
module.exports = mongoose.model('Dialog',dialogSchema);
