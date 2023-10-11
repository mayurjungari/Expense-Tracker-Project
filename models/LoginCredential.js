const Sequelize=require('sequelize');
const sequelize = new Sequelize('Node_complete', 'root', 'Mayur@123', {
    host: 'localhost',
    dialect: 'mysql', 
  });

  const Credential=sequelize.define('credential',{
    ID :{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        
        autoIncrement:true,
    },
    Email :{
        type: Sequelize.STRING,
        allowNull: false,
        
        unique: true,
    },
    USERNAME :{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    
    PASSWORD :{
        type: Sequelize.STRING,
        allowNull: false,
        
    }

  },
  {
    tablename:'credential' ,
})
  sequelize.sync()
  .then(() => {
    console.log('sync succesfully');
    
  }).catch((err) => {
    console.log(err);
  });
  
  module.exports=Credential