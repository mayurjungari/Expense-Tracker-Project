// app.use(express.json());
const express = require('express');
const router = express.Router();
const path = require('path');
const Credential=require('../models/LoginCredential')
const Expensedata=require('../models/Expensedata')
const Order=require('../models/Order')
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: 'rzp_test_l8Qgv3sCDGg8Cr',
  key_secret: '597pfku3duKmtEiCSqqoo9JO'
});
const jwt=require('jsonwebtoken')
const createocontroller=require('../controller/createordercintroller')
const menbershipcontroller=require('../controller/MembershipUpdateController')

router.post('/createOrder', createocontroller.CreateOrder);
router.post('/membershipupdate',menbershipcontroller.UpdateMembership)
  module.exports=router