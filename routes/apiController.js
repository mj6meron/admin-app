const signale = require('signale')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../database/models/User')
const Product = require('../database/models/Product')
const {
    addUserValidation,
    loginValidation,
    addProductValidation,
    removePoductValidation,
    removeUserValidation
  } = require('../database/controllers/validation');


// WELCOME AND LOGIN
exports.welcome= async (req, res)=>{
    res.send('welcome here buddy')

}

exports.login= async (req, res)=>{

        // Validate Admin
        const { error } = loginValidation(req.body);
        if (error) {
            signale.fatal("Admin login validation failed")
            return res.status(400).json({error: error.details[0].message});
        }

        // if existing email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            signale.fatal("Email not found")
            return res.status(400).json({error: 'Email is not found'});
        }
       
        // If the isAdmin is true
        if (user.is_admin==false){
            signale.fatal(" Not Admin :( ")
            return res.json({errorMessage: " Not Admin :( "})
        }
    
        // Password correct?
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) {
            signale.fatal("Invalid Admin Password")
            return res.status(400).json({error: 'Invalid Admin password'});
        }
    
        // Create and assign token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).json({token: token, redirect: 'dashbord'}); // attached token to the header
}


// USERS APIs

exports.allUsers=async(req, res)=>{
    signale.pending('Admin is trying to get all users ...')
}

exports.addUser= async (req, res)=>{
 signale.pending('Admin is trying to add a user ...')
 
   // Validate User
   const { error}= addUserValidation(req.body)
   if (error) {
        signale.fatal('user add validation failed')
       return res.status(400).json({error: error.details[0].message});   // The message is form the joi object in validation.js
   }

   // If existing user
   const emailExist = await User.findOne({ email: req.body.email });
   if (emailExist) {
        signale.fatal('Email already exists!')
       return res.status(400).json({error: 'Email already exists!'});
   }

   // Hash Password
   const salt = await bcrypt.genSalt(10);
   const hashPssword = await bcrypt.hash(req.body.password, salt);

   // Create new User
   const user = new User({ 
       email: req.body.email,
       password: hashPssword
   });

   try {
       const savedUser = await user.save()
       res.json({user: savedUser})
       signale.complete("User saved " + savedUser)
   } catch (err) {
       res.status(400).json(err);
   }
}

exports.deleteUser= async (req, res)=>{
    signale.pending('Admin is trying to delete a user ...')

    res.json({message: 'Delete a user ?', YourReq: req.body})

}



// PRODUCTS APIs

exports.addProduct= async (req, res)=>{
    signale.pending('Admin is trying to add a product ...')



    res.json({message: 'Add a product?', YourReq: req.body})

}

exports.deleteProduct= async (req, res)=>{
    signale.pending('Admin is trying to delete a product ...')
    try {
    const { error } = removePoductValidation(req.body);
        if (error) {
            signale.fatal("Remove input validation failed :(")
            return res.status(400).json({error: error.details[0].message});   // The message is form the joi object in validation.js
        }
        // if existing Product
        const productExists = await Product.findOne({ _id: req.body.product_id});
        if (!productExists) {
            signale.fatal("Product does not exist :(")
            return res.status(400).json({error: 'Product does not exist :('});
        }
        // Create new User
        const product = await Product.findById(req.body.product_id)
        await product.remove()
        signale.complete(`Product of id ${req.product_id}, succefully Removed!`)
        res.json({message: `Product of id ${req.product_id}, succefully Removed!`});
    } catch (err) {
        signale.fatal("Something went wrong while removing ... ")
        console.log(err)
        res.status(400).json(err);
    }

}

// UPDATE FUNCTIONALITIES TO BE IMPLEMENTED IN THE FUTURE

exports.updateProduct= async (req, res)=>{
    signale.pending('Admin is trying to update a product ...')
}

exports.updateUser= async (req, res)=>{
    signale.pending('Admin is trying to update a user ...')
}
