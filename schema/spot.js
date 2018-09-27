var mongoose = require('mongoose');

const schema_spot = new mongoose.Schema({
  latitude : Number,
  longitude : Number,
  note: Number,
  label : String
});

module.export = schema_spot;
