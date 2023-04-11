const express = require("express");
const { UserdModal } = require("../Modal/userModal");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config();

const userrouter = express.Router();

// register

userrouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const IsUserExist = await UserdModal.findOne({ email });
    if (IsUserExist){
         res.status(200).send(
            {
                msg:"You have already an account, please login"
            }
         )
    }

    else {
      bcrypt.hash(password, 6, async (err, hash) => {
        if (hash) {
          const user = new UserdModal({
            email,
            password: hash,
          });
          await user.save();
          res.status(200).send({msg:"Registered"});
        } else {
          console.log("err");
          res.status(400).send(err);
        }
      });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// login

userrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserdModal.findOne({ email });
    const id = user._id;
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ _id: id }, process.env.secretKey);
        res.status(200).send({ msg: "Login Successful", token: token });
      }
      else if(err){
        res.send("Invalid Credentials")
      }
      else {
        res.status(200).send({msg:`Invalid Credentials`});
      }
    });
  } catch (err) {
    res.status(400).send(`Wrong Credentials: ${err.message}`);
  }
});

module.exports = {
  userrouter,
};

