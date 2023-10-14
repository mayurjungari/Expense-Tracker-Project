
const jwt = require('jsonwebtoken');
const Order=require('../models/Order')
const Expensedata=require('../models/Expensedata')
const Credential=require('../models/LoginCredential')
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: 'rzp_test_l8Qgv3sCDGg8Cr',
  key_secret: '597pfku3duKmtEiCSqqoo9JO'
});


module.exports.UpdateMembership=   async (req, res) => {
    try {
      const { paymentId, status, orderId } = req.body;
      const orderdata = await Order.findOne({ where: { orderId: orderId } });
  
  
      
      if (orderdata) {
        const promise1 = orderdata.update({
          paymentId: paymentId,
          status: status,
        });
        const token = req.session.user.token;
        const decodedtoken = jwt.verify(token, 'Mayur@123');
        console.log('decoded',decodedtoken)
        const promise2 = Credential.update(
          { ispremium: true },
          { where: { ID: decodedtoken.userId } }
        );
  
        Promise.all([promise1, promise2])
          .then(() => {
            console.log('Premium Membership Updated')
            res.status(202).json({ message: 'Transaction successful' });
          })
          .catch((error) => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
          });
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }