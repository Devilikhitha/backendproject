const mongoose=require("mongoose")
const ContentSchema={
    username:String,
    password:String
}
const Content=mongoose.model("Project",ContentSchema)
module.exports=Content