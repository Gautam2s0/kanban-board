const mongoose=require("mongoose")

const schema=mongoose.Schema({
    title : String,
    board:mongoose.Types.ObjectId,
	description : String,
	status : {type: String, default: 'Todo'},
	subtask : [{ type: mongoose.Types.ObjectId, ref: 'Subtask'}]

})

const TaskModal=mongoose.model("Task",schema)

module.exports={
    TaskModal
}