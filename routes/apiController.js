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
 signale.pending('Admin is trying to add a user ...')
}

exports.deleteUser=(req, res)=>{
    signale.pending('Admin is trying to delete a user ...')

}

exports.updateUser=(req, res)=>{
    signale.pending('Admin is trying to update a user ...')

}

// PRODUCTS APIs

exports.addProduct=(req, res)=>{
    signale.pending('Admin is trying to add a product ...')

}

exports.deleteProduct=(req, res)=>{
    signale.pending('Admin is trying to delete a product ...')

}

exports.updateProduct=(req, res)=>{
    signale.pending('Admin is trying to update a product ...')

}