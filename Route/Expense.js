const express = require('express');
const router = express.Router();
const path = require('path');
const Credential=require('../models/LoginCredential')
const Expensedata=require('../models/Expensedata')
const gethomepageController=require('../controller/expenseHomePage')
const addExpense=require('../controller/addExpensedata')
const getdata=require('../controller/Getdata')
const delExpense=require('../controller/deleteExpensecontroller')

router.get('/expense',gethomepageController.GetHomepage)

router.post('/expense/addData',addExpense.AddExpenseData)
router.get('/expense/getdata',getdata.Getdata)
router.delete('/expense/deletedata/:id',delExpense.DeleteExpenseData)


module.exports = router;
