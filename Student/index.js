//import
const express=require("express")
require("./connection")
var stumodel=require("./models/student")

//initialize
const app=express()

//mid
app.use(express.json())

//create api
app.get('/', (req, res) => {
  res.send('Hello World !')
})



//add api
app.post("/add",async(req,res)=>{
    try {
        
        await stumodel(req.body).save()
        res.send("data added") 
    } catch (error) {
        console.log(error)
        
    }
})

//view api
app.get("/view",async(req,res)=>{
    try {
        
        const v=await stumodel.find()
        res.send(v)
    } catch (error) {
        console.log(error)
        
    }
})

//delete api
app.delete("/remove/:id",async(req,res)=>{
    try {
        
        await stumodel.findByIdAndDelete(req.params.id)
        res.send("data deleted")
    } catch (error) {
        console.log(error)
        
    }
})



//update api
app.put("/update/:id",async(req,res)=>{
    try {
        
        const v=await stumodel.findByIdAndUpdate(req.params.id,req.body)
        res.send("data updated")
    } catch (error) {
        console.log(error)
        
    }
})



//port setting
app.listen(3005,()=>{
    console.log("Port is running at 3005")
})