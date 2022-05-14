"use strict";
const router = require("express").Router()
const verify = require("./varifyToken")
const userApi = require("./userApi.js")
const productApi = require("./productApi.js")
//----------------------------------------------------------------------------------
//ROUTES - Home
router.post("/login", userApi.login)
//----------------------------------------------------------------------------------
// USER ROUTES
router.get("/allUsers", verify, userApi.allUsers)
router.post("/addUser", verify, userApi.addUser)
router.delete("/deleteUser", verify, userApi.deleteUser)
router.patch("/updateUser",  verify,userApi.updateUser) 
//----------------------------------------------------------------------------------
// PRODUCT ROUTES
router.get("/allProducts",  verify,productApi.allProducts)
router.post("/addProduct", verify, productApi.addProduct)
router.delete("/deleteProduct", verify, productApi.deleteProduct)
router.patch("/updateProduct", verify, productApi.updateProduct) 
//----------------------------------------------------------------------------------

module.exports = router;
