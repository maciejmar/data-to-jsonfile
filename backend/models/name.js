const mongoose  = require('mongoose');


const nameSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  displayName: [{
    type: String,
    required: true
  }],
  characterImage: {
    type: String,
    required: true
  },
  done :{
    type: Boolean,
    required: true
  },
  segments:{


      pl: [{
        type:  String,
        active: Boolean,
        required: true
      }],
      en: [{
        type: String,
        active: Boolean,
        required: true
      }],
      de: [{
        type: String,
        active: Boolean,
        required: true
      }]

  }


});
module.exports = mongoose.model('Name', nameSchema);
