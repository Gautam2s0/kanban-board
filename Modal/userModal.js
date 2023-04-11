const mongoose=require("mongoose")

const schema=mongoose.Schema({
    email: String,
    password:String

})

const UserdModal=mongoose.model("user",schema)

module.exports={
    UserdModal
}