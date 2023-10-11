const express=require('express')
const app=express();
const signuproute=require('./Route/user')

app.use(signuproute)

app.use((req,res)=>{
    res.send('Not Found')
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})