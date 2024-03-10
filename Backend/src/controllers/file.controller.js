import { File } from "../models/file.model.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadoncloudinary } from "../utils/cloudinary.js";
const fileUpload=asyncHandler(async(req,res)=>{
    const filelocalPath=req.files?.file[0].path;
    if(!filelocalPath){
        throw new ApiError(400,"File is missing!!!")
    }
    const uploadedfile=await uploadoncloudinary(filelocalPath);
    if(!uploadedfile){
        throw new ApiError(400,"Error while uploading the file")

    }
    // const user=await User.findById(req.user?._id)
    // if(!user){
    //     throw new ApiError(400,"User is not logged in!")
    // }
    const file=await File.create({
        url:uploadedfile.url,
        // owner:user._id

})
if(!file){
    throw new ApiError(400,"Error while  creating a asset in database!!!")
}

return res.status(200).json(new ApiResponse(200,{file},"File has been created successfully"))


})
export{fileUpload}