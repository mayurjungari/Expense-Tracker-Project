const express=require('express')
const app=express();
const userroute=require('./Route/user')
const bodyparser=require('body-parser')
const Credential=require('./models/LoginCredential');

app.use(bodyparser.urlencoded({ extended: false }));





    



app.get('/user',userroute)
app.post('/user/signup',userroute)
app.get('/',userroute)
app.post('/login',userroute)

    

app.use((req,res)=>{
    res.send('Not Found')
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})