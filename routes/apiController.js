const signale = require('signale')
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
    res.json('you trying to login as admin')
}


// USERS APIs

exports.addUser= async (req, res)=>{
 signale.pending('Admin is trying to add a user ...')

 const { error}= addUserValidation(req.body)


if (!error){console.log('you have passed the validation')}else{console.log('validation failed')}
 res.json({message: 'You want to add a user!!!', yourReq: req.body })


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

// UPDATE FUNCTIONALITITES TO BE IMPLEMENTED IN THE FUTURE

exports.updateProduct= async (req, res)=>{
    signale.pending('Admin is trying to update a product ...')
}

exports.updateUser= async (req, res)=>{
    signale.pending('Admin is trying to update a user ...')
}
