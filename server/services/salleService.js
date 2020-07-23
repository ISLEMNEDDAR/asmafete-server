import Salle from "../models/Salle";
import {handleResponse} from "../utils/handleResponse";

export default class salleService {

    static async getAllNotReserved(){
        const salles = await Salle.find({reserve : false}).then(salles => salles)
        return handleResponse(200,false,{
            salles : salles
        })
    }

    static async getSalleByIdAndUpdate(salleid,feteId) {
        console.log(salleid)
        return await Salle.findByIdAndUpdate({_id : salleid},{
            $set : {
                fete : feteId,
                reserve : true
            }
        },{new : true}).then(salle => salle)
    }
}