import AuthModel from "../models/auth.model.js";

const authModel = new AuthModel();

class AuthController{
    async checkLogin (user, pass){
        const check= await authModel.checkLogin(user, pass);
        return check;
    }
    
    async userLogin(checkUser, response){
        const responseCheck = await authModel.responseUser(checkUser, response)
        return responseCheck;
    }
}

export default AuthController;