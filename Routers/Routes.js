const express=require("express")
const { SubTaskModal } = require("../Modal/Subtask_Model")
const { BoardModal } = require("../Modal/Board_Model")
const { TaskModal } = require("../Modal/Task_Model")
const { AddBoardName } = require("../Middlewares/boardName")
const { isAuth } = require("../Middlewares/userAuth")


const router=express.Router()

//  board

router.post("/createboard",isAuth,async(req,res)=>{
    console.log(req.body)
    try{
        const isExist=await BoardModal.findOne({name:req.body.name})
        const board=new BoardModal(req.body)
        if(isExist){
          
            res.status(200).send({msg:"board is present already"})
        }
        else{
            await board.save()
            res.status(200).send({msg:"board successfully create",id:board.id})
        }
    }
    catch(err){
        res.status(400).send({msg:err})
    }
})

// task

router.post("/addtask",AddBoardName,async(req,res)=>{
    try{

        const task=new TaskModal(req.body)
        await task.save()
        res.status(200).send({msg:"adding task successfull",task})

    }
    catch(err){
        res.status(400).send({err})

    }
})

router.patch("/task/:id",async(req,res)=>{
    const _id=req.params.id
    try{

        await TaskModal.findByIdAndUpdate(_id,req.body)
        res.status(200).send({msg:"upadte task successfull"})

    }
    catch(err){
        res.status(400).send({err})

    }
})

//  subtask


router.post("/addsub",async(req,res)=>{
    try{
        const sub=new SubTaskModal(req.body)
        await sub.save()
        res.status(200).send({msg:"added subtask",subtask:sub})

    }
    catch(err){
        res.status(400).send({err})

    }
})

router.patch("/sub/:id",async(req,res)=>{
    const _id=req.params.id
    
    try{
        console.log("no er")
        await SubTaskModal.findByIdAndUpdate(_id,{isCompleted:true?false:true})
        res.status(200).send({msg:"update subtask"})

    }
    catch(err){
       
        res.status(400).send({err})

    }
})
module.exports={
    router
}