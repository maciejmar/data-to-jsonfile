const mongoose  = require('mongoose');


const nameSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  characterImage: {
    type: String,
    required: true
  },
  done :{
    type: Boolean,
    required: true
  },
  segments:[{

      active: {
        type: boolean,
        required: true
      },
      pl: {
        type:  String,
        required: true
      },
      en: {
        type: String,
        required: true
      },
      de: {
        type: String,
        required: true
      }

  }]


});
module.exports = mongoose.model('Name', nameSchema);
