const express = require("express");

const { validate, checkUserSignup } = require('./../middlewares')
const {
  signin,
  signup
} = require("../controllers/user");
const schema = require('./schema/user');


const router = express.Router();

router.post("/signin", validate(schema.userSignin), signin);
router.post("/signup", validate(schema.userSignup), checkUserSignup, signup);

module.exports = router;
