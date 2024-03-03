import express from "express"
import cors from"cors"
import cookieParser from "cookie-parser"
const app= express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({
    extended:true,limit:"16kb"
}))
app.use(express.static("public"))
//This is for accesstoken and  refresh token to stay in req
app.use(cookieParser())
//For routing to the user routes
import userRouter from "./routes/user.routes.js"
app.use("/api/v1/users",userRouter)//For user 
export default app