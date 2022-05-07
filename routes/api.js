'use strict'
const router = require('express').Router()
const verify = require('./varifyToken')
const userApi = require('./userApi.js')
const productApi = require('./productApi.js')
//----------------------------------------------------------------------------------
//ROUTES - Home
router.post('/login', userApi.login)
//----------------------------------------------------------------------------------
// USER ROUTES
router.get('/allUsers', userApi.allUsers)
router.post('/addUser', userApi.addUser)
router.delete('/deleteUser', userApi.deleteUser)
router.patch('/updateUser', verify, userApi.updateUser)   //  -- to be implemented later maybe
//----------------------------------------------------------------------------------
// PRODUCT ROUTES
router.get('/allProducts', productApi.allProducts)
router.post('/addProduct', productApi.addProduct)
router.delete('/deleteProduct', productApi.deleteProduct)
router.patch('/updateProduct', varify, productApi.updateProduct)   // -- to be implemented later maybe
//----------------------------------------------------------------------------------

module.exports = router;
