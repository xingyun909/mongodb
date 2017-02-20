var mongoose = require('mongoose')
var config = require('./config')

module.exports = function(){
    var db = mongoose.connect(config.mongodb)

    require('../models/user.server.model.js')

      mongoose
        .connection
        .on('connected', function () {
            console.log('Mongoose connected to ' + config.mongodb)
        })
    mongoose
        .connection
        .on('error', function () {
            console.log('Mongoose connection error')
        })
    mongoose
        .connection
        .on('disconnected', function () {
            console.log('Mongoose disconnected')
        })


    return db
}