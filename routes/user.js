import { checkUserName, deleteUser, getUserByUsername, loginUser, register, updateUser } from "../controllers/register.js";
import { checkToken } from "../middleware.js";
import User from "../models/usersModel.js";
import cors from "cors";

import express from "express";
const app = express();

const userRoute=express.Router();
app.use(cors());

userRoute.post('/register',register)
userRoute.patch('/update/:username',updateUser)
userRoute.patch('/delete/:username',deleteUser)
userRoute.post('/login',loginUser)
userRoute.get('/:username',checkToken, getUserByUsername)
userRoute.get('/checkusername/:username',checkUserName)

export default userRoute