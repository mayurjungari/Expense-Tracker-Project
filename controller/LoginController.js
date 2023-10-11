const Credential=require('../models/LoginCredential')
module.exports.LoginCheck= async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const existingUser = await Credential.findOne({
        where: {
          Email: email,
          PASSWORD: password,
        }
      });
  
      if (existingUser) {
        console.log("Successfully Log In");
        res.status(200).json({ message: "Successfully logged in" });
      } else {
        console.log("Invalid Credentials");
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }