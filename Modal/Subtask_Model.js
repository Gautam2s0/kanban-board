const mongoose=require("mongoose")

const schema=mongoose.Schema({
    title : String,
	isCompleted : Boolean,
    // task:mongoose.Types.ObjectId

})
const SubTaskModal=mongoose.model("Subtask",schema)

module.exports={
    SubTaskModal
}
