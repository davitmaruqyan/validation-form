const express = require('express');
const router = express.Router();
const mongodb = require('../model/schema/user');

router.get('/', (req, res, next) => {
  if (req.session.userId) {
        mongodb.findById(req.session.userId).then((user) => {
        res.render('resault', { title: 'User Page', user: user });
    });
  }

});

module.exports = router;
