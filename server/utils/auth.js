import * as jwt from "jsonwebtoken";
import devConfig from "../config/configs";

export const createToken = args =>{
    return jwt.sign({
        id : args._id
    },devConfig.JWT_SECRET)
};

