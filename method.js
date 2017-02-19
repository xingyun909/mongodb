var mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost:13380/demo')

var BookSchema = mongoose.Schema({
    name:String,
    isbn:Number
})


//静态方法     多用与辅助查询
BookSchema.statics.findByISBN = function(isbn,cb){
    this.findOne({isbn:isbn},function(err,doc){
        cb(err,doc)
    })
}

var Book = mongoose.model('Book',BookSchema)  //创建一个模型

var book  = new Book({
    name:'IKM dSKA mak',
    isbn:   2132332
})

book.save(function(err){
    if(err){
        console.log('save book failed',e)
    }

    //调用静态方法从模型上查找，
    Book.findByISBN(2132332,function(err,doc){
        console.log('findByISBN e doc : ',err,doc )
    })
})
