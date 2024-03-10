import Router from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { fileUpload } from "../controllers/file.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router=Router()
router.route("/fileUpload").post(verifyJWT,upload.fields([{name:"file",maxCount:1}]),fileUpload)
export default router