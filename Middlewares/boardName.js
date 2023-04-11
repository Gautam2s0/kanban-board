const { BoardModal } = require("../Modal/Board_Model");


const AddBoardName=async(req,res,next)=>{
  const id=req.headers.board;
   if(id){
    req.body.board=id;
    next()
   }
   else{
    res.status(400).send({msg:"Please assign board name"})
   }

}




module.exports = {
 AddBoardName
};

