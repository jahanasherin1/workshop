const mongoose = require('mongoose')

var schema = mongoose.Schema(
    {
        Name:String,
        Age:Number,
        Dept:String,
        Sal:Number
    }
)

//model
var EmployeModel=mongoose.model("kmctemployee",schema)
module.exports=EmployeModel