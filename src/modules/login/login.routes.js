import { Router } from "express";
import { handleLogin, login } from "./login.controller.js";
const loginRouter = Router();
loginRouter.get("/login",login);
loginRouter.post('/handleLogin',handleLogin)

export default loginRouter;
