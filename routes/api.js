'use strict';
const router = require('express').Router();
const apiController = require('./apiController.js');



//ROUTES

router.get('/welcome', apiController.welcome);
router.post('/login', apiController.login);

// USER ROUTES

router.post('/addUser', apiController.addUser);
router.delete('/deleteUser', apiController.deleteUser);
router.patch('/updateUser', apiController.updateUser);

// PRODUCT ROUTES

router.post('/addProduct', apiController.addProduct);
router.delete('/deleteProduct', apiController.deleteProduct);
router.patch('/updateProduct', apiController.updateProduct);

module.exports = router;
