
const Expensedata=require('../models/Expensedata')
const jwt = require('jsonwebtoken');


module.exports.AddExpenseData= async (req,res)=>{
    try{
        const token = req.session.user.token;
        const decoded = jwt.verify(token, 'Mayur@123');     
           const uId = decoded.userId;


        console.log(uId)
       
        const category = req.body.catagory;
        const description = req.body.desc;
        const amount = req.body.ammount;
       
        console.log(category, description, amount);
        const newExpensedata=await Expensedata.create({
            CATEGORY:category,
            DESCRIPTION:description,
            AMOUNT:amount,
            credentialID: uId,
    
         })
         console.log(`New record : ${newExpensedata}`)
         res.redirect('/expense')
    }
 
    
      
   catch (error) {
      console.log(error)
      
  }
}
 


    

