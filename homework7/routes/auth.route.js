import express from "express";
import { authSession } from "../sessions/auth.session.js";
import AuthController from "../controllers/auth.controller.js";

const authController = new AuthController();
const routerAuth = express.Router();

routerAuth.post("/login", authSession, async (req, res) => {
    const body = req.body
    const loggedUser = req.session.user = await authController.checkLogin(body.username, body.password);
    
    await authController.userLogin(loggedUser, res);
})

export default routerAuth;