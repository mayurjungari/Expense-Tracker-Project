const express = require('express');
const router = express.Router();
const path = require('path');
const Credential=require('../models/LoginCredential')
const signupcontroller = require('../controller/signupcontroller');
const getsigninPagecontroller=require('../controller/GetSignInPageController')

const postSignUpcontroller=require('../controller/postSignupDataController');
const logincontroller=require('../controller/LoginController')

router.get('/user', signupcontroller.getSignUpPage );
router.post('/user/signup',postSignUpcontroller.PostSignUpData)
router.get('/',getsigninPagecontroller.GetSignInPage)
router.post('/login',logincontroller.LoginCheck)



module.exports = router;
