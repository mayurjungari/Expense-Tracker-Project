const Sequelize=require('sequelize');
const sequelize = new Sequelize('Node_complete', 'root', 'Mayur@123', {
    host: 'localhost',
    dialect: 'mysql', 
  });

  const Expensedata=sequelize.define('Expensedata',{
    
        ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        

    CATEGORY :{
        type: Sequelize.STRING,
        allowNull: false,
        
    } ,
     DESCRIPTION :{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    AMOUNT :{
        type: Sequelize.FLOAT,
        allowNull: false,
        
    },



  })
  sequelize.sync()
  .then((result) => {
    console.log('sync edata succesfully');
    
  }).catch((err) => {
    console.log(err);
  });
  
  module.exports=Expensedata