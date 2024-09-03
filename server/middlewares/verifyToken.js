const jwt = require('jsonwebtoken');

// middleware alsway have  req,res and next

const verifyToken = (req, res, next) => {

    const token = req.headers['authorization'].split(' ')[1];
    if (!token) return res
    .status(403)
    .json({ success:false, message: 'Token not provided.' });

    try {
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
            if (error) return res
            .status(403)
            .json({ success:false, message:"Error verifying token"})

                req.id = user.id;
                req.reusername = user.username;
                req.email =  user.email;
                req.accountType = user.accountType;
                
                next();

        });
        
    } catch (error) {
        return res.status(403).json({ success:false, message:"accese failed"})
        
    }
}

module.exports = {verifyToken}