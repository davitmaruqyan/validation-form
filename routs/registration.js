const express = require('express');
const router = express.Router();

const Users = require('../model/schema/user');

router.get('/', (req, res, next) => {
  res.render('registration', {title: 'Reagistration Page'});
})

router.post('/', (req, res, next) => {
  let users = new Users(req.body);
  users.save().then((user) => {
    res.redirect('/login');
    res.send(user)
  }).catch((err) => {
    throw err
    console.log(err);
  })
})

module.exports = router
