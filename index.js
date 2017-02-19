var mongoose = require('mongoose')

var BookSchema = mongoose.Schema({
    isbn:{
        type:Number,
        unique:true         //唯一索引
    },
    name:{
        type:String,
        index:true          //辅助索引
    }
})


