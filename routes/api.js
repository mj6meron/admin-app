'use strict';
const router = require('express').Router();
const verify = require('./varifyToken');
const apiController = require('./apiController.js');

//ROUTES

router.get('/welcome', apiController.welcome);
router.post('/login', apiController.login);

// USER ROUTES

router.post('/addUser', apiController.addUser);
router.delete('/deleteUser', verify, apiController.deleteUser);
router.patch('/updateUser', verify, apiController.updateUser);

// PRODUCT ROUTES

router.post('/addProduct', verify, apiController.addProduct);
router.delete('/deleteProduct', verify, apiController.deleteProduct);
router.patch('/updateProduct', verify, apiController.updateProduct);

module.exports = router;
