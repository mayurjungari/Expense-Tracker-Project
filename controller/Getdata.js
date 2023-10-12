const Expensedata = require('../models/Expensedata');
const jwt = require('jsonwebtoken');

module.exports.Getdata = async (req, res) => {
    try {
        
        const token = req.session.user.token;

        
        const decoded = jwt.verify(token, 'Mayur@123');
        const credentialID = decoded.userId;

        
        const Allexpenses = await Expensedata.findAll({
            where: { credentialID }
        });

        console.log('Retrieve Successfully');
        res.status(200).json(Allexpenses);
    } catch (error) {
        console.log(error);
        res.status(404).json({ 'message': error });
    }
}
