import User from "../../models/User";
import devConfig from "../../config/configs";
import {createToken} from "../../utils/auth";
import bcrypt from 'bcrypt'
import {handleResponse} from "../../utils/handleResponse";

export default class userService {
    static async getUser(email){
        return User.findOne({email: email});
    }

    static async getInfoUser(email) {
        const user = await this.getUser(email)
        return {
            _id: user._id,
            email: user.email,
            nom: user.nom,
            prenom: user.prenom,
            age: user.age,
            sexe: user.sexe,
            phone: user.phone,
            wilaya: user.wilaya,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    }

    static async saveUser(user){
        return await User.save(user)
    }

    static async signup(user){
        const newUser = await this.getUser(user.email)
        if(!newUser){
            user.password = await bcrypt.hash(user.password, devConfig.BCYPT_ROUND)
            return handleResponse(200,false,{
                user : await User.create(user),
                token : "Bearer "+ createToken(user)
            })
        }else{
            return handleResponse(400,true,{message: "user exist"})
        }
    }

    static async login(user){
        const isExistUser = await this.getUser(user.email)
        if(isExistUser){
            let isSamePassword = await bcrypt.compare(user.password,isExistUser.password)
            return isSamePassword ? handleResponse(200,false,{
                user : await this.getInfoUser(user.email),
                token : "Bearer "+createToken(user)
            }) : handleResponse(400,true,{message : "email or password is wrong"})
        }else{
            return handleResponse(400,true,{message : "email or password is wrong"})
        }
    }
}