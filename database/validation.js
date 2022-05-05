// Validation
const Joi = require('@hapi/joi');
const { description } = require('@hapi/joi/lib/base');

// Register Validation

// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

// 

const addUserValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};

const addProductValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(2).required(),
    category: Joi.string().min(3).required(),
    cost: Joi.number().required(),
    description: Joi.string().min(0)
  });
  return schema.validate(data);
};

// 

const removeUserValidation = (data) => {
  const schema = Joi.object({
    user_id: Joi.string().required()
  });
  return schema.validate(data);
};

const removePoductValidation = (data) => {
    const schema = Joi.object({
      product_id: Joi.string().required()
    });
    return schema.validate(data);
  };

module.exports = {
  addUserValidation,
  loginValidation,
  addProductValidation,
  removePoductValidation,
  removeUserValidation
};
