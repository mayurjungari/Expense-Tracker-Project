const express=require('express')
const Sequelize=require('sequelize')
const sequelize = new Sequelize('Node_complete', 'root', 'Mayur@123', {
    host: 'localhost',
    dialect: 'mysql', 
  });
const app=express();


const session = require('express-session');

app.use(session({
  secret: 'your-secret-key', 
  resave: false,
  saveUninitialized: true
}));




const userroute=require('./Route/user')
const expenseroute=require('./Route/Expense')
const bodyparser=require('body-parser')
const Credential=require('./models/LoginCredential');
const Expensedata=require('./models/Expensedata')
const path=require('path')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'Public')))



Credential.hasMany(Expensedata)
Expensedata.belongsTo(Credential)
    



app.get('/user',userroute)
app.post('/user/signup',userroute)
app.get('/',userroute)
app.post('/login',userroute)
app.get('/expense',expenseroute)
app.post('/expense/addData',expenseroute)
app.get('/expense/getdata',expenseroute)

app.delete('/expense/deletedata/:id',async (req,res)=>{
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
        console.log('something went wrong')
    }
        
    } catch (error) {
        console.log(error)
    }
    
})

sequelize.sync()
.then(() => {
  console.log('Database synchronized.');
})
.catch((error) => {
  console.error('Error synchronizing the database:', error);
});



    

app.use((req,res)=>{
    res.send('Not Found')
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})