
const Expensedata=require('../models/Expensedata')
const jwt = require('jsonwebtoken');


module.exports.DeleteExpenseData= async (req,res)=>{
    try {
        const id=req.params.id;
    const deletedRows = await Expensedata.destroy({
        where: {
            ID: id,
        },
    });
    if(deletedRows)
    {
        console.log('data Deleted Succesfully')
       
        res.redirect('/expense')
    }
    else{
        console.log('something went wrong while deleting')
    }
        
    } catch (error) {
        console.log('from delete',error)
    }
}