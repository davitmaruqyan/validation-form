const express = require('express');
const router = express.Router();
const mongodb = require('../model/schema/user');

router.get('/', (req, res, next) => {
  res.render('login', {title: 'Login Page'});
});

router.post('/', (req, res, next) => {
  let login = req.body.login;
  let password = req.body.pass;
  mongodb.findOne({email: login}).then((user) => {
    if (user) {
      if (user.chackPassword(password)) {
        req.session.userId = user._id;
        res.redirect('/users');
      }else {
        res.redirect('/error')
      }
    }else {
      res.redirect('/error')
    }
  })
})

module.exports = router
