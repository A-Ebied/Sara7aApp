import { Router } from "express";
import { logOut, sendMsg, user } from "./user.controller.js";
const userRouter = Router();
userRouter.get("/user/:id", user);
userRouter.post("/sendMsg/:id", sendMsg);
userRouter.get("/logout", logOut);

export default userRouter;
