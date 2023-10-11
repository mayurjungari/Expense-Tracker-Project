const express = require('express');
const router = express.Router();
const path = require('path');
const signupcontroller = require('../controller/signupcontroller');

router.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'Views', 'Signup.html'));
  } );

module.exports = router;
