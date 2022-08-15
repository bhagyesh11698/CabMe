const { user: _user } = require("../models");
const Users = _user;
const { sign } = require("jsonwebtoken");
const { hashSync, compareSync } = require("bcryptjs");
const { jwtSecretKey } = require('./../config')


const signup = (req, res) => {
  const user = new Users({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    contact: req.body.contact,
    email: req.body.email,
    password: hashSync(req.body.password, 8)
  });
  user.save((err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    return res.status(200).send({ message: "User registered successfully!" });
  });
};

const signin = (req, res) => {
  Users.findOne({
    email: req.body.email
  })
    .exec((err, user) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = sign({ id: user.id }, jwtSecretKey , {
        expiresIn: 86400 // 24 hours
        
      });
     
      
      return res.status(200).send({
        id: user._id,
        userName: user.userName,
        email: user.email,
        accessToken: token
      });
    
    });
};

const controller = {
  signin,
  signup
};

module.exports = controller;