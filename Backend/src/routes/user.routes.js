import Router  from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
const router=Router()
router.route("/register").post(registerUser)//For registration of the user
router.route("/login").post(loginUser)//Logs in the user
export default router