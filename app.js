const express=require('express')
const app=express();
const signuproute=require('./Route/user')
const bodyparser=require('body-parser')
const Credential=require('./models/LoginCredential');
const { log } = require('console');
app.use(bodyparser.urlencoded({ extended: false }));


app.post('/user/signup',async (req,res)=>{
    const { uname,password,email}=req.body;
    if(password.length<6)
    {
        console.log('enter 6 digit password')
        res.status(404).json({message:"Check password" })
    }
    try { 
         const emailExhist=  await Credential.findOne({
        where :{
            Email:email,  
        }
    });
    if(emailExhist){
    console.log('Email Already exhist')
    res.status(409).json({ message: 'Email already exists' });
    }
    else{
        const newCredential= await Credential.create({
            Email:email,
            USERNAME:uname,
            PASSWORD:password,

        })
        console.log(newCredential)
        console.log('Log up succefully')
        res.status(201).json({message:'SignUp successfully'})
    }
    
    
}
    
catch (error) {
    console.log(error)
    res.status(500).json({message : 'Something Went Wrong'})
    
}
}

)


    



app.use(signuproute)

app.use((req,res)=>{
    res.send('Not Found')
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})