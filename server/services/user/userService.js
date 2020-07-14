import User from "../../models/User";

export default class userService {
    static async getUser(email){
        return await User.findOne({email : email})

    }
}