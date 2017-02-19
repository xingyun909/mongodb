/**
 * 验证器
 * 预定义验证器
 * 自定义验证器
 */

var mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost:13380/demo')

var OrderSchema = mongoose.Schema({
    count:{
        type:Number,        //预定义
        required:true,      //必填
        max:100,           //最大
        min:10            //最小
    },
    status:{
        type:String,
        enum:['created','success','failed']         //枚举，status值满足其一
    },
    desc:{
        type:String,
        macth:  /book/g,         //满足匹配条件
        validate:function(desc){
            return desc.length > 10 //返回Boolean
        }
    }
})

var Order = mongoose.model('Order',OrderSchema)

var order = new Order()

// order.count  = 5
order.count  = 20
// order.count  = 111

order.status= 'success'
// order.desc = "idn book "
order.desc = "idn ids fsfskmfsf book "

order.save(function(err ){
    if(err){
       return console.log('save order failed:',err)
    }

    console.log("save success")
})