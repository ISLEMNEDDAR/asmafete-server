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

    static async getFeteById(feteId){
        return await Fete.findById(feteId).then(fete => fete)
    }

    static async getFetesByIds(listFetesId){
        let listFete = []
        if(Array.isArray(listFetesId) && listFetesId.length){
            for (const feteid of listFetesId) {
                const fete = await this.getFeteById(feteid)
                listFete.push(fete)
            }
        }
        return listFete
    }

    static async getUserFete(userId){
        const user  = await userService.getUserById(userId)
        const listFete = await this.getFetesByIds(user.listFete)
        return handleResponse(200,false,{
            listFete : listFete
        })
    }
}