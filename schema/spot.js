var mongoose = require('mongoose');

const schema_spot = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  latitude : Number,
  longitude : Number,
  note: Number,
  label : String
});

module.export = schema_spot;
