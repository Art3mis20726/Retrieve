import mongoose from "mongoose"
const fileSchema=new mongoose.Schema({
    url:{
        type:String,
    
    },owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const File=mongoose.model("File",fileSchema)
