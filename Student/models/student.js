const mongoose=require('mongoose')

var schema = mongoose.Schema(
    {
        Name:String,
        Age:Number,
        Course:String,
        Dept:String
        
    }
)

//model
var StudentModel=mongoose.model("ictstudent",schema)
module.exports=StudentModel








