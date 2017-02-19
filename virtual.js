var mongoose = require('mongoose')

var PersonSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String
})

//虚拟属性‘fullName’ 用virtual函数，在获取模式时拼接出fullName
PersonSchema.virtual('fullName').get(function(){
    return this.firstName + " " +this.lastName 
})

PersonSchema.set('toJSON',{getters:true,virtual:true})//进行设置，可以使转化成JSON时有虚拟属性

var Person = mongoose.model('Person',PersonSchema)

var person = new Person({
    firstName:'leo',
    lastName:'xue'
})

console.log('user fullName:'+person.fullName)

//实例转化成json,没有虚拟属性
console.log('json:'+JSON.stringify(person))