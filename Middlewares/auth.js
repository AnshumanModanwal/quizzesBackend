
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.auth = async (req,res,next)=>{
    try {
        //extract token
      

        const token = req.cookies.token || req.body.token||req.header("Authorisation").replace("Bearer ", "");
        console.log("token",token)
       
        if(!token){
            return res.status(401).json({
                success:false,
                message:'TOken is missing',
            });
        }

        //verify token
        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            req.user = decode;

            
        } catch (error) {
             //verification - issue
             return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
            
        }
        next();

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token',
        });
    }
}