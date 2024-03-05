const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const User = require("../models/user.model");
const { verifyToken } = require('../helper/jwtService');

const isUserAuthenticated =  async (req, res, next) => {
    try {
      
        if (!req.headers.authorization || req.headers.authorization == 'Bearer null') throw createError.BadRequest('Please Login')
        const tokenHeader = req.headers.authorization.split(' ');
        if (tokenHeader.length !== 2) throw createError.BadRequest('Invalid Token')
        const token = tokenHeader[1];
        if (token==null) throw createError.BadRequest('Token cannot be null')
        
        const data = await verifyToken(token);
        const decoded = data.message
        const flag = data.flag
        
        if (!flag) {
            //if (err.name == 'TokenExpiredError') throw createError.Unauthorized('Token Expired')
           
            res.status(401).json({ 
                error:{
                    status: 401,
                    message: "Token Expired"
                }
            });
            return;
        } else {
            const user = await User.findOne({_id : decoded._id});
            if(!user){
                res.status(404).json({ 
                    error:{
                        status: 404,
                        message: "User Does not exist"
                    }
                });
                return;
            }
            
            req.user = decoded;
            req.token = token;
            next();
        }
        
    } catch(err) {
        next(err)
        return;
    }
}

module.exports = {

    isUserAuthenticated
}