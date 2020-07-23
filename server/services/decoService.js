import Decoration from "../models/Deco";
import {handleResponse} from "../utils/handleResponse";
import Salle from "../models/Salle";

export default class decoService {

    static async getAllNotReserved(){
        const deco = await Decoration.find({reserved : false}).then(deco => deco)
        return handleResponse(200,false,{
            deco : deco
        })
    }

    static async getDecoByIdAndUpdate(decoid, feteid) {
        return await Decoration.findByIdAndUpdate({_id : decoid},{
            $set : {
                fete : feteid,
                reserved : true
            }
        },{new : true}).then(deco => deco)
    }
}