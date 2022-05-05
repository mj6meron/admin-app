'use strict';
const router = require('express').Router();
const apiController = require('./apiController.js');

router.get('/welcome', apiController.welcome);

module.exports = router;
