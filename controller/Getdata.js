const Expensedata=require('../models/Expensedata')
module.exports.Getdata=async (req,res)=>{
    try{
    const Allexpenses= await Expensedata.findAll()
    console.log('retrive Succesfully')
    res.status(200).json(Allexpenses);

    }
    catch(error)
    {
        console.log(error);
        res.status(404).json({'message' :error})
    }

}