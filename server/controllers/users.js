var user = require('../models/users')

var users = {}

users.getUsers = function (req,res,next) {
  user.find({}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

users.getUser = function (req,res,next) {
  user.find({_id:req.params.id}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

users.createUser = function (req,res,next) {
  user.create({
    username: req.body.username,
    name: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then (function (data) {
    res.json(data)
  })
}

users.updateUser = function (req,res,next) {
  user.update({
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

users.deleteUser = function (req,res,next) {
  user.find({_id:req.params.id}).remove(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json (`data id has been deleted`)
    }
  })
}

module.exports = users
