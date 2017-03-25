const mongoose = require('mongoose')
const Schema = mongoose.Schema

let portfolioSchema = Schema({
  title: String,
  description: String,
  creator: {type: Schema.Types.ObjectId, ref: 'user'},
  slug: String
}, {
  timestamps: true
})

let portfolio = mongoose.model('portfolio', portfolioSchema)

module.exports = portfolio
