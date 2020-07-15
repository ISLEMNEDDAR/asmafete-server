import * as jwt from "jsonwebtoken";
import devConfig from "../config/configs";
import {handleResponse} from "./handleResponse";

export const createToken = args =>{
    return jwt.sign({
        id : args._id
    },devConfig.JWT_SECRET)
};

export const checkToken = async (req)=>{
    let token = req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    if(token){
        try {
            await jwt.verify(token,devConfig.JWT_SECRET)
            return true
        }catch (e) {
            return false
        }
    }else{
        return false
    }
}

