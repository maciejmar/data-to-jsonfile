const mongoose  = require('mongoose');

const dialogSchema = new mongoose.Schema({
  dialogName: {
    type: String,
    required: true
  },
  segment:[{

      fileName: {
        type: [],
        required: true
      },
      textDuration: {
        type:  [],
        required: true
      },
      characterName: {
        type: [],
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
