import Salle from "../models/Salle";
import {handleResponse} from "../utils/handleResponse";

export default class salleService {

    static async getAllNotReserved(){
        const salles = await Salle.find({reserve : false}).then(salles => salles)
        return handleResponse(200,false,{
            salles : salles
        })
    }
}