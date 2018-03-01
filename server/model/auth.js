var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var authSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Auth = mongoose.model('Auth', authSchema);

// make this available to our users in our Node applications
module.exports = Auth;
