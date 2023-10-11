const Credential=require('../models/LoginCredential')
module.exports.LoginCheck= async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const existEmail = await Credential.findOne({
        where: {
          Email: email,
          
        }
      });
  
      if (existEmail) {
        const matchPassword=await Credential.findOne({
            where: {
              PASSWORD: password,
              
            }
          });
          if(matchPassword){
            console.log("sucesfully Log in")
            res.status(200).json({message:"succesfully Login"})
          }
          else{
            res.status(404).json({message:"Check Password"})

          }
       
      } else {
        console.log("User doesnot Exhist");
        res.status(401).json({ message: "User Not Found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }