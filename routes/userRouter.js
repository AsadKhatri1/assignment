import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import authMiddlewear from "../middlewears/auth.js";
const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", authMiddlewear, loginUser);

export default userRouter;
