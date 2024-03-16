import { File } from "../models/file.model.js";
import cron from "node-cron";
import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadoncloudinary } from "../utils/cloudinary.js";
import deleteExpiredFiles from "../utils/deleteExpiredFiles.js"
import moment from "moment-timezone"; // Import moment-timezone library
const fileUpload=asyncHandler(async(req,res)=>{
    const filelocalPath=req.files?.file[0].path;
    if(!filelocalPath){
        throw new ApiError(400,"File is missing!!!")
    }
    const uploadedfile=await uploadoncloudinary(filelocalPath);
    if(!uploadedfile){
        throw new ApiError(400,"Error while uploading the file")

    }
    const user=await User.findById(req.user?._id)
    if(!user){
        throw new ApiError(400,"User is not logged in!")
    }
    const file=await File.create({
        url:uploadedfile.url,
         owner:user._id,
         public_id:uploadedfile.public_id,
        expiryTimestamp: moment().tz("Asia/Kolkata").add(2, "minutes").toDate() // Example: 2 minutes expiry

})
const fileAsset=await File.findById(file._id).select("-owner -_id -expiryTimestamp -uploadTimestamp")
if(!fileAsset){
throw new ApiError(500,"Internal Server Error!!")
}
user.allVideos.push(file._id)
user.save({validateBeforeSave:false})

if(user.allVideos.length===0){
    cronJob.stop();
    console.log("No files Uploaded!!!");
}
const cronJob = cron.schedule('* * * * *', deleteExpiredFiles, {
    timezone: "Asia/Kolkata" // Set timezone to India (Asia/Kolkata)
}); // Run every minute

// deleteExpiredFiles()

return res.status(200).json(new ApiResponse(200,{fileAsset},"File has been created successfully"))


})

export{fileUpload}