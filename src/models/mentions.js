//call of mongoose and schema instance
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema model - db model
const batata = new Schema({
  friend: {
    type: String,
    /* required: true, */
    trim: true
  },
  mention: {
    type: String,
    /* required: true */
  }
});

module.exports = mongoose.model('Mentions', batata);