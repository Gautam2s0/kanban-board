const express=require("express")
const cors=require("cors")
const {router}=require("./Routers/Routes")
const {connection}=require("./Configs/db")
const { userrouter } = require("./Routers/userLogin")
require("dotenv").config()

const app=express()

app.use(express.json())
app.use(cors())
app.use(router)
app.use(userrouter)
app.get("/",(req,res)=>{
    res.status(200).send("Kanban Board")
})

app.listen(port=process.env.port||8080,async(req,res)=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log(err)

    }
    console.log(`server is running at port ${port}`)
})