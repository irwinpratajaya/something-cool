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
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: validators.isEmail()
  },
  password: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

let user = mongoose.model('user', userSchema)

module.exports = user
