// dependencies
const Joi = require('joi');


const userSignup = Joi.object({
  contact: Joi.string(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userSignin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});


const user = {
  userSignin,
  userSignup
};

module.exports = user;
