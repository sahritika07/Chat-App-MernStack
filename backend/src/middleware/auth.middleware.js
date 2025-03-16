import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const protectRoute = async(req,res,next) => {
    try {
        const token= req.cookies.jwt
        if(!token){
            return res.status(401).json({message: "Unauthorized - No token Provided"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        
    }
}