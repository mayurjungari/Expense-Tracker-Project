const Credential=require('../models/LoginCredential')

module.exports.PostSignUpData=async (req,res)=>{
    const { uname,password,email}=req.body;
    if(password.length<6)
    {
        console.log('enter 6 digit password')
        res.status(404).json({message:"enter 6 digit password" })
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