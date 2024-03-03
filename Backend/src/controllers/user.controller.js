import { use } from "bcrypt/promises.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
const generateTokens=async(user_id)=>{
        const user=await User.findById(user_id);//Finding the user
        //Generating the tokens
        const accessToken= user.generateAccessToken()
        const refreshAccessToken= user.generateRefershAccessToken()
        
        user.refreshToken=refreshAccessToken;
       await user.save({validateBeforeSave:false})//Saving it in the user
       return{accessToken,refreshAccessToken}
    }
    const registerUser=asyncHandler(async(req,res)=>{
        //TODOS
        //Take input from the user
        //Check if input is coming correctly or not
        //Check if it exist or not
        //if not create a new user
        //from response remove password and refershToken
        const{userName,rollNumber,fullName,password}=req.body;
        //console.log(req.body);
        if(userName===""){
            throw new ApiError(400,"Username is required!")
        }
        if(rollNumber===""){
            throw new ApiError(400,"Roll Number is required!")
        }
        if(fullName===""){
            throw new ApiError(400,"Full Name is required!")
    }
    if(password===""){
        throw new ApiError(400,"Password is required!")
    }
    //Checking if user exits or not
    const existedUser=await User.findOne({
        $or:[{userName},{rollNumber}]
    })
    if(existedUser){
        throw new ApiError(400,"User already exists")
    }
    //Creating the user
    const user=await User.create({
        userName:userName,
        rollNumber:rollNumber,
        fullName:fullName,
        password:password
        
        
    })
    //Checking if user is created or not
    const userCreated=await User.findById(user._id).select("-password -refreshToken")
    if(!userCreated){
        throw new ApiError(400,"Error in registering user!")
        
    }
    return res
    .status(200)
    .json(new ApiResponse(200,userCreated,"User Registered Successfully") )
})
const loginUser=asyncHandler(async(req,res)=>{
    const{userName,password}=req.body//Takes input
    if(userName===""){
        throw new ApiError(400,"Username required")}
    if(password===""){
            throw new ApiError(400,"Password required")}
            const user=await User.findOne(userName)//Finds the user in the database
            if(!user){
                throw new ApiError(400,"User not found")
            }
            const isValid=await user.isPasswordCorrect(password)//Checks if the password is correct or not
            if(!isValid){
                throw new ApiError(400,"Wrong password entered!")
            }
            const Options={
                httpOnly:true,
                secure:true
            }
            //Generating accesstokens
            const{accessToken,refreshAccessToken}=await generateTokens(user._id);
            const loggedInUser=await User.findById(user._id).select("-password -refreshToken")
            return res
            .status(200)
            .cookie("accessToken",accessToken,Options)
            .cookie("refreshAccessToken",refreshAccessToken,Options)
            .json(new ApiResponse(200,{user:loggedInUser,accessToken,refreshAccessToken},"User Logged in Successfully!"))
            
            
            





})



export{registerUser,loginUser}