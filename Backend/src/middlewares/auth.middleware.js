import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
export const verifyJWT=asyncHandler(async(req,res,next)=>{
    try {
        const token=req.cookies?.accessToken
        if(!token){
            throw new ApiError(401,"Not authenticated")
        }
        const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        if(!decodedToken){
            throw new ApiError(403,'Invalid Token')
        }
        const user=await User.findById(decodedToken?._id);
        if(!user){
            throw new ApiError(404,'User not found')
        }
        req.user=user
        next()
    } catch (error) {
        console.log("Error while finding token",error)
    }


})
