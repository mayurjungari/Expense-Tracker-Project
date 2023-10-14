
const Expensedata=require('../models/Expensedata')
const jwt = require('jsonwebtoken');
const Order=require('../models/Order')
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: 'rzp_test_l8Qgv3sCDGg8Cr',
  key_secret: '597pfku3duKmtEiCSqqoo9JO'
});


module.exports.CreateOrder=  async (req, res) => {
    const options = {
      amount: 50000, 
      currency: 'INR',
      receipt: 'receipt_order_1',
    };
  
    try {
      razorpay.orders.create(options, async (err, order) => {
        if (err) {
          console.error('Error creating order:', err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Order:', order.id);
          const token = req.session.user.token;
  
          
          const decoded = jwt.verify(token, 'Mayur@123');
          console.log(decoded)
          const saveorder= await Order.create({
            credentialID:decoded.userId,
            status:'Pending',
            paymentId:null, 
            orderId:order.id,
  
  
  
          })
  
      console.log('Order data save to database')
          res.status(200).json(order);
        }
      });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).send('Internal Server Error');
    }
  }