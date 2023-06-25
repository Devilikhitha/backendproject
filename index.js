const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Content=require("./schema")
// console.log(Content)
const app=express()
const port = process.env.PORT || 4000;
app.use(cors())
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb+srv://devilikhitha:devilikhitha@cluster0.estft3j.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("Mongo db connected sucessfully")
})
.catch((err)=>{
    console.log(err)
}) 
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("hi devi how are you? API is working  ")
})
app.get("/users",async(req,res)=>{
    await Content.find()
    .then(found=>res.json(found))
})
app.post("/store",(req,res)=>{
    const {username,password}=req.body
    const newData = new Content({
        username,password
    })
    newData.save()
})
app.listen(port,()=>console.log("server is running on port",port))