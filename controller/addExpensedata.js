
const Expensedata=require('../models/Expensedata')


module.exports.AddExpenseData= async (req,res)=>{
    try{
        const category = req.body.catagory;
        const description = req.body.desc;
        const amount = req.body.ammount;
        console.log(category, description, amount);
        const newExpensedata=await Expensedata.create({
            CATEGORY:category,
            DESCRIPTION:description,
            AMOUNT:amount,
    
    
         })
         console.log(`New record : ${newExpensedata}`)
         res.redirect('/expense')
    }
 
    
      
   catch (error) {
      console.log(error)
      
  }
}
 


    

