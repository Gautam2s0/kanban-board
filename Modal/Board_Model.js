const mongoose=require("mongoose")

const schema=mongoose.Schema({
    name: String,
    // tasks: [{ type:mongoose.Types.ObjectId, ref: 'Task'}]

})

const BoardModal=mongoose.model("board",schema)

module.exports={
    BoardModal
}