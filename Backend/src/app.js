import express from "express"
import cors from"cors"
import cookieParser from "cookie-parser"
const app= express()

app.use(cors({
    origin:['http://localhost:3000','http://127.0.0.1:3000'],
    credentials:true
}))
app.use(express.json({
    limit:"1000kb"
}))
app.use(express.urlencoded({
    extended:true,limit:"1000kb"
}))
app.use(express.static("public"))
//This is for accesstoken and  refresh token to stay in req
app.use(cookieParser())
//For routing to the user routes
import morgan from "morgan";
import logger from "./utils/logger.js";
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

import userRouter from "./routes/user.routes.js"
import fileRouter from "./routes/file.routes.js"
app.use("/api/v1/users",userRouter)//For user 
app.use("/api/v1/files",fileRouter)//For uploading file 
export default app