//import 
const express=require("express")
require("./connection")
var empmodel=require("./models/employees")
var cors = require('cors')

//initializze
const app=express()

//mid
app.use(express.json())
app.use(cors())

//api create
app.get('/', (req, res) => {
  res.send('Hello World !')
})



//add api
app.post("/add",async(req,res)=>{
    try {
        
        await empmodel(req.body).save()
        res.send("data added")
    } catch (error) {
        console.log(error)
        
    }
})

//view api
app.get("/view",async(req,res)=>{
    try {
        
        const v=await empmodel.find()
        res.send(v)
    } catch (error) {
        console.log(error)
        
    }
})

//delete api
app.delete("/remove/:id",async(req,res)=>{
    try {
        
        await empmodel.findByIdAndDelete(req.params.id)
        res.send("data deleted")
    } catch (error) {
        console.log(error)
        
    }
})

//update api
app.put("/update/:id",async(req,res)=>{
    try {
        
        const v=await empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send("data updated")
    } catch (error) {
        console.log(error)
        
    }
})

//port setting
app.listen(3004,()=>{
    console.log("Port is running at 3004")
})