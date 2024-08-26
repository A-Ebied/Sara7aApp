import { Router } from "express";
import { messages } from "./messages.controller.js";
const messagesRouter = Router();
messagesRouter.get("/messages", messages);

export default messagesRouter;
