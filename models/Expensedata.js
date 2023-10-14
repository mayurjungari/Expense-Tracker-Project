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
  // sequelize.sync()
  // .then(() => {
  //   console.log('Database synchronized.');
  // })
  // .catch((error) => {
  //   console.error('Error synchronizing the database:', error);
  // });
  
  module.exports=Expensedata