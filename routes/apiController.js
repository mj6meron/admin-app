const signale = require('signale')


// WELCOME AND LOGIN
exports.welcome=(req, res)=>{
    res.send('welcome here buddy')
}

exports.login=(req, res)=>{
    res.send('you trying to login as admin')
}




// USERS APIs

exports.addUser=(req, res)=>{
 signale.pending('we tryna add a user')
 res.send('hello')
}

exports.deleteUser=(req, res)=>{

}

exports.updateUser=(req, res)=>{

}

// PRODUCTS APIs

exports.addProduct=(req, res)=>{

}

exports.deleteProduct=(req, res)=>{

}

exports.updateProduct=(req, res)=>{

}