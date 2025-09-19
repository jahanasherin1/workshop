const mongoose=require('mongoose')


mongoose.connect('mongodb+srv://jahanasherin2311:jahana2003@cluster0.yxorpgh.mongodb.net/ict?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log("Connected!"))
.catch((err)=>console.log(err))
