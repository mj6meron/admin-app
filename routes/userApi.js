const signale = require('signale')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../database/models/User')
const {
    addUserValidation,
    loginValidation,
    removeUserValidation
} = require('../database/controllers/validation');


// LOGIN
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
        signale.fatal(" Not Admin Email :( ")
        return res.status(400).json({error: " Not Admin Email:( "})
    }
    
    // Password correct?
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        signale.fatal("Invalid Admin Password")
        return res.status(400).json({error: 'Invalid Admin password'});
    }
    
    // Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({token: token, redirect: 'dashboard'}); // attached token to the header
}

// USERS APIs
exports.allUsers = async(req, res) => {
    signale.pending('Admin is trying to get all users ...')
    try {
        
        const mydata = await User.find({})
        signale.complete('A list of users sent to ADMIN !')
        res.header("Access-Control-Allow-Origin", "*"); //for solving CORS Policy
        res.json({message: 'Here is a list of users', users: mydata})
    } catch (error) {
        signale.fatal('Something went wrong getting all users')
        res.status(400).json('Invalid Token')
    }
}

exports.addUser= async (req, res)=>{
    signale.pending('Admin is trying to add a user ...')
    
    // Validate User request body
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
    // Validate DELETE User request body
    const { error}= removeUserValidation(req.body)
    if (error) {
        signale.fatal('user remove validation failed - u need to pass in user_id:"asdfaf"')
        return res.status(400).json({error: error.details[0].message});   // The message is form the joi object in validation.js
    }
    
    // Storing the ID to be deleted
    const id = req.body.user_id
    signale.info("id -> " + id)
    
    // Make sure the id format is correct
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        signale.fatal("Object-Id format not right!")
        return res.status(400).json({errorMessage:`Object-Id format not right!`})
    }
    
    //  If user is available to delete
    const user = await User.findOne({ _id: id })
    if (!user){
        signale.fatal('User not found')
        return res.status(400).json({errorMessage:`User of id ${id} not found!`})
    }
    try {
        await user.remove()
        
        signale.complete('User removed!')
        
        return res.status(400).json({message:`User of id ${id} succefully Removed!`})
        
    } catch (error) {
        signale.fatal('Something went wrong deleting User')
        return res.status(404).json({errorMessage: "Something went wrong deleting User"})
    }
    
}

// UPDATE FUNCTIONALITIES TO BE IMPLEMENTED IN THE FUTURE

exports.updateUser= async (req, res)=>{
    signale.pending('Admin is trying to update a user ...')
}
