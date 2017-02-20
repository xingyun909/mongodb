var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
        uid: String,
        username: String,
        createTime: Date, 
        lastlogin: Date
})

mongoose.model('User', UserSchema)
