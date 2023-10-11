const express = require('express');
const path = require('path');

module.exports.getSignUpPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'Views', 'Signup.html'));
};
