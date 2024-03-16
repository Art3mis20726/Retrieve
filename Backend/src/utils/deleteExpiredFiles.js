import { File } from "../models/file.model.js";
import { User } from "../models/user.model.js";
import ApiError from "./ApiError.js";
import deletefromcloudinary from "./deletecloudinary.js";
const deleteExpiredFiles=async()=>{
 try {
       const expiredFiles=await File.find({expiryTimestamp: { $lt: new Date()} });
       for (const file of expiredFiles) {
           // Delete file from Cloudinary
           const delFromCloud=await deletefromcloudinary(file.public_id)
           if(!delFromCloud){
            throw new ApiError(400,"Error while deleting  the file from cloud")
           }
           // Delete record from MongoDB
           const delFromDatabase=await File.findByIdAndDelete(file._id);
           if(!delFromDatabase){
            throw new ApiError(400,"Error while deleting fromn database")
           }
           console.log("File deleted!!!");
            const user =await User.findById(file.owner)
            
            const index =user.allVideos.indexOf(file._id)
            user.allVideos.splice(index,1)
        
            await user.save({validateBeforeSave:false})
        
        
        
        
        }
   
 } catch (error) {
    console.log("Error while deletion of file");
 }
}
export default deleteExpiredFiles