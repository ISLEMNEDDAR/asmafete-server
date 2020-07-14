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
    // save user
    const user = await userService.getUser(req.email)
    console.log(user)
    if(user){
        return res.status(200).json({
            message : "login seccued"
        })
    }else{
        return res.status(200).json({
            message : "email or password false"
        })
    }
    // return user
}

export const signup = async (req,res)=>{
    handleValidationError(req)
    const user = await userService.signup(req.body)
    console.log(user)
    return res.status(user.status).json(user.response)
}