// Validation
const Joi = require('@hapi/joi')

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
}

// USERS VALIDATION
const addUserValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};

const removeUserValidation = (data) => {
  const schema = Joi.object({
    user_id: Joi.string().required()
  });
  return schema.validate(data);
}

// PRODUCTS VALIDATION
const addProductValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(2).required(),
    category: Joi.string().min(3).required(),
    cost: Joi.number().required(),
    description: Joi.string().min(0),
    owner_id: Joi.string().required()
  });
  return schema.validate(data);
}

const removePoductValidation = (data) => {
    const schema = Joi.object({
      product_id: Joi.string().required()
    });
    return schema.validate(data);
  }


const updateUserValidation =(data)=>{
  const schema = Joi.object({
    user_id: Joi.string().required(),
    email: Joi.string().email(),
    password: Joi.string().min(5),
    is_admin: Joi.boolean()
  })
  return schema.validate(data)
}



module.exports = {
  addUserValidation,
  loginValidation,
  addProductValidation,
  removePoductValidation,
  removeUserValidation,
  updateUserValidation
};
