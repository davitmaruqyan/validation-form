const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('error', {title: 'Login Page'})
});

module.exports = router;
