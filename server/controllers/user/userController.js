import {handleValidationError} from "../../utils/handleErros";
import userService from "../../services/userService";
import {response} from "../../utils/handleResponse";

export const login = async (req,res)=>{
    // validate
    handleValidationError(req,res)
    const user = await userService.login(req.body)
    response(res,user.status,user.response)
    // return user
}

export const signup = async (req,res)=>{
    handleValidationError(req)
    const user = await userService.signup(req.body)
    response(res,user.status,user.response)
}