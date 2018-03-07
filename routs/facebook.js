const express = require('express');
const router = express.Router();
const mongodb = require('../model/schema/user');

router.get('/', (req, res, next) => {
  res.render('facebook');
});



module.exports = routers
