const User=require('../Models/user')
const jwt=require('jsonwebtoken')
require('dotenv').config()

exports.authenticate=async(req,res,next)=>{
    try{
        const token=req.header('Authorization')
        const userPayload=await jwt.verify(token,'secretkey')
        const user=await User.findByPk(userPayload.userId)
        req.user=user
        next()
    }catch(err){
        res.status(401).json({ error: 'Authentication failed' })
        
    }

}
