var portfolio = require('../models/portfolios')
var slug = require('slug')

var portfolios = {}

portfolios.getPortfolios = function (req,res,next) {
  portfolio.find({}).populate('creator').then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

portfolios.getPortfolio = function (req,res,next) {
  portfolio.find({_id:req.params.slug}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

portfolios.createPortfolio = function (req,res,next) {
  portfolio.create({
    title: req.body.title,
    description: req.body.email,
    creator: req.body.creator,
    image: req.body.image,
    slug: slug(req.body.title).toLowerCase()
  }).then (function (data) {
    res.json(data)
  })
}

portfolios.updatePortfolio = function (req,res,next) {
  portfolio.update({
    _id: req.params.id
  },{
    $set: req.body
  }).then(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

portfolios.deletePortfolio = function (req,res,next) {
  portfolio.find({_id:req.params.id}).remove(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json (`data id has been deleted`)
    }
  })
}

module.exports = portfolios
