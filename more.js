/***
 * 添加嵌套数据
 */



var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:13380/demo')

Schema = mongoose.Schema;

var attributesSchema = new Schema({
    userName: String,
    phone: String,
    password: String,
    sex: String,
    birthDate: Date,
    avatar: String,
    city: String,
    address: String
})

var dataSchema = new Schema({
    type: {
        type: String,
        default: 'users'
    },
    id: String,
    attributes:attributesSchema

});

var UserSchema = new Schema({ //约定
    verified: {
        type: Boolean,
        default: false
    },
    verifyCode: String,
    accessToken: String,
    data: dataSchema
})

var User = mongoose.model('User', UserSchema)

var user = new User({
    verified: true,
    verifyCode: '6455',
    accessToken: "dsagDGdfhSdfg",
    data: {
        id: 'dasdsa',
        attributes:{
            userName: 'userName',
            phone: '12313434543',
            password: 'werweString',
            sex: 'M',
            birthDate: Date.now(),
            avatar: 'http://dsadadsa',
            city: 'beijing',
            address: '朝阳区'
        }
    }
})
console.log('user:' + user)
user.save(function (err) {
    if (err) {
        return console.log('save user failed', err)
    }
    console.log('save success')
})
