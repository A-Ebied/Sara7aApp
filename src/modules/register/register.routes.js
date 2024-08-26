import { Router } from "express";
import { handleRegister, register } from "./register.controller.js";
const registerRouter = Router();
registerRouter.get("/register", register);
registerRouter.post("/handleRegister", handleRegister);

export default registerRouter;
