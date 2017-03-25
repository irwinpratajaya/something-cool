const mongoose = require('mongoose')
const Schema = mongoose.Schema
var validators = require('mongoose-validators');

let userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    validate: validators.isDate()
  }

}, {
  timestamps: true
})

let user = mongoose.model('user', userSchema)

module.exports = user
