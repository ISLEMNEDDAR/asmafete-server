import User from "../../models/User";
import devConfig from "../../config/configs";
import {createToken} from "../../utils/auth";
import bcrypt from 'bcrypt'

export default class userService {
    static async getUser(email){
        return User.findOne({email: email});
    }

    static async saveUser(user){
        return await User.save(user)
    }



    static async signup(user){
        const newUser = await this.getUser(user.email)
        if(!newUser){
            user.password = await bcrypt.hash(user.password, devConfig.BCYPT_ROUND)
            return {
                status : 200,
                response : {
                    error : false,
                    data : {
                        user : await User.create(user),
                        token : "Bearer "+ createToken(user)
                    }
                }
            }
        }else{
            return {
                status : 400,
                response : {
                    error: true,
                    data: {
                        message: "user exist"
                    }
                }
            }
        }
    }
}