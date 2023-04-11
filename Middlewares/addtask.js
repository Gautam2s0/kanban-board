const AddTaskId = (req, res, next) => {
  const id =req.headers.sub;
  if (id) {
     let p=req.body.subtask||[]
     p.push(id)
    req.body.subtask=p
    next();
  } else {
    res.status(400).send({ msg: "Please assign task first" });
  }
};


module.exports={
    AddTaskId
}