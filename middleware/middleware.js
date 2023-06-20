const jwt = require('jsonwebtoken');
function authenticationToken(secretKey){
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
    
        if(!token) {
          res.sendStatus(403);
        }
    
        jwt.verify(token, secretKey, (err, decode)=>{
          if(err){
            res.sendStatus(403);
          }
    
          req.userId = decode.userId;
    
          next();
        });
    }
}

module.exports = { authenticationToken };