const express = require('express');
const path = require('path');

module.exports.GetSignInPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'Views', 'SignIn.html'));
};
