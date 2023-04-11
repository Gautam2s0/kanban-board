const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.secretKey);
    if (decoded) {
      next();
    } else {
      res.status(200).send("Login First");
    }
  } else {
    res.status(200).send("Login First");
  }
};


module.exports = {
  isAuth,
};
