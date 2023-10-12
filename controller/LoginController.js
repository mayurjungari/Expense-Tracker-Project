const Credential=require('../models/LoginCredential')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
module.exports.LoginCheck= async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const existEmail = await Credential.findOne({
        where: {
          Email: email,
          
        }
      });

  
      if (existEmail) {
        const storeHashPassword=existEmail.PASSWORD;
        console.log(storeHashPassword)
         const matchPassword=await bcrypt.compare(password,storeHashPassword)
          if(matchPassword){
           
            console.log("sucesfully Log in") 
            const token = jwt.sign({ userId: existEmail.ID }, 'Mayur@123');
            console.log(token)

            req.session.user = {
              token
          };
            
           

            
            res.redirect('/expense');
          }
          else{
            res.status(401).json({message:"Incorrect Password"})
            
               
          
 
          }
       
      } else {
        console.log("User doesnot Exhist");
        res.status(404).json({ message: "User Not Found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }