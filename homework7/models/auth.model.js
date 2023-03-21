import fileService from "../file-service/file.service.js";
import path from "path";
import { response } from "express";

class AuthModel {
    authPath = path.join(".", "db", "users.json");

    async checkLogin(username, password) {
        const users = await fileService.readFile(this.authPath);
        for (let user of users) {
            if (username === user.username && password === user.password) {
                return {
                    userIs: username,
                    isLoggedIn: true,
                };
            }
            else {
                return false
            }
        }
    }
    async responseUser (checkUser, response){
        if (checkUser === false) {
            response.status(403).send({ message: "Wrong username or password." })
        }
        else {
            response.send({ message: "Logged in successfully." })
        }
    }
}
export default AuthModel;
