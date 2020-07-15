import userService from "./userService";
import Fete from "../models/Fete";
import {handleResponse} from "../utils/handleResponse";

export default class feteService {

    static async createFete(args) {
        // create fete with user
        const fete = await new Fete(args)
        // update user with fete
        var user = await userService.updateUserWithFete(args.id_user,fete.id)
        // save fete
        // save user
        return handleResponse(200,false,{
            user : (await user.save()).listFete,
            fete : await fete.save()
        })
    }
}