const express=require('express')
const Sequelize=require('sequelize')
const jwt=require('jsonwebtoken')



const Razorpay = require('razorpay');



const razorpay = new Razorpay({
  key_id: 'rzp_test_l8Qgv3sCDGg8Cr',
  key_secret: '597pfku3duKmtEiCSqqoo9JO'
});



const Order=require('./models/Order')
const sequelize = new Sequelize('Node_complete', 'root', 'Mayur@123', {
    host: 'localhost',
    dialect: 'mysql', 
  });
 
const app=express();



const session = require('express-session');

app.use(session({
  secret: 'your-secret-key', 
  resave: false,
  saveUninitialized: true
}));





const userroute=require('./Route/user')
const expenseroute=require('./Route/Expense')
const deleteroute=require('./Route/Expense')
const bodyparser=require('body-parser')
const Credential=require('./models/LoginCredential');
const Expensedata=require('./models/Expensedata')
const paymentRoute=require('./Route/payement')
const path=require('path');


app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'Public')))



Credential.hasMany(Expensedata)
Expensedata.belongsTo(Credential)

Credential.hasMany(Order)
Order.belongsTo(Credential)
    



app.get('/user',userroute)
app.post('/user/signup',userroute)
app.get('/',userroute)
app.post('/login',userroute)
app.get('/expense',expenseroute)
app.post('/expense/addData',expenseroute)
app.get('/expense/getdata',expenseroute)
//---------------------------------------------------------------------------------------------------------
app.post('/createOrder',paymentRoute)

app.use(express.json());
//------------------------------------------------------------------------------o
app.post('/membershipupdate',paymentRoute)
app.delete('/expense/deletedata/:id',deleteroute)



 
  sequelize.sync( ).then(() => {
    console.log('All models were synchronized successfully.');
  }).catch((error) => {
    console.error('An error occurred during synchronization:', error);
  });
  

app.use((req,res)=>{
    res.send('Not Found')
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})