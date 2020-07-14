import {handleValidationError} from "../../utils/handleErros";
import userService from "../../services/user/userService";

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const login = async (req,res)=>{
    // validate
    handleValidationError(req,res)
    const user = await userService.login(req.body)
    return res.status(user.status).json(user.response)
    // return user
}

export const signup = async (req,res)=>{
    handleValidationError(req)
    const user = await userService.signup(req.body)
    return res.status(user.status).json(user.response)
}