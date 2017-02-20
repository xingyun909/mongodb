var mongoose = require('./config/mongoose')
var User = require('./models/user.server.model')
//mongoose 导出的是一个生成数据库实例的方法
var db = mongoose()
