let mongoose = require('mongoose');

let Contract = mongoose.Schema({

  pricePerRequest: {type: String},
  pricePerHour: {type: String},
  type: {type: Number},
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
  creationDate: {type: Date, Default: new Date() },
  modules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module'
  }],
});

module.exports = mongoose.model('Contract', Contract);

