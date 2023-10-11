
const path=require('path')
module.exports.GetHomepage=(req,res)=>{

    res.sendFile(path.join(__dirname, '../','Views', 'Expense.html'));

}